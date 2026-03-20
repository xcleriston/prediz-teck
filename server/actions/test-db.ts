"use server";

import { db } from "@/lib/db";
import { tenants } from "@/drizzle/schema";

export async function testDB() {
  try {
    const result = await db.select().from(tenants).limit(1);

    return {
      success: true,
      data: result
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: "Erro ao conectar no banco"
    };
  }
}
