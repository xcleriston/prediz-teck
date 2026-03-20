"use server";

import { db } from "@/lib/db";
import { bets, markets } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { calcCost } from "@/lib/lmsr";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const betSchema = z.object({
  marketId: z.string().uuid(),
  side: z.enum(["yes", "no"]),
  amount: z.number().positive(),
  userId: z.string().uuid(), // To be retrieved from auth session normally
});

export async function placeBet(input: z.infer<typeof betSchema>) {
  try {
    const { marketId, side, amount, userId } = betSchema.parse(input);

    const market = await db.query.markets.findFirst({
      where: eq(markets.id, marketId)
    });

    if (!market) throw new Error("Mercado não encontrado");
    if (market.status !== "active") throw new Error("Mercado não está ativo");

    const qYes = Number(market.q_yes);
    const qNo = Number(market.q_no);
    const b = Number(market.liquidity_b);

    // Calculate shares based on amount and LMSR cost function
    // For simplicity in this step, we'll use a fixed price approximation or 
    // solve for delta in costFunction(q + delta) - costFunction(q) = amount
    // Here we use a simplified version for the MVP demonstration
    const shares = amount; // 1:1 for now, should be solved via cost function inverted
    
    const cost = calcCost(qYes, qNo, b, shares, side);

    // Update market state (Atomic operation recommended in production)
    if (side === "yes") {
      await db
        .update(markets)
        .set({ 
           q_yes: (qYes + shares).toString(),
           updated_at: new Date()
        })
        .where(eq(markets.id, marketId));
    } else {
      await db
        .update(markets)
        .set({ 
           q_no: (qNo + shares).toString(),
           updated_at: new Date()
        })
        .where(eq(markets.id, marketId));
    }

    // Register bet
    await db.insert(bets).values({
      market_id: marketId,
      user_id: userId,
      side,
      amount: amount.toString(),
      shares: shares.toString(),
      avg_price: (cost / shares).toString(),
      tenant_id: market.tenant_id // Inherit tenant from market
    });

    revalidatePath("/");
    return { success: true };
  } catch (err: any) {
    console.error("Betting error:", err);
    return { success: false, error: err.message || "Erro desconhecido ao apostar" };
  }
}
