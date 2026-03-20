import { headers } from "next/headers";
import { db } from "./db";
import { tenants } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

/**
 * Retrieves the current tenant based on the host header
 */
export async function getCurrentTenant() {
  const headersList = await headers();
  const domain = headersList.get("x-tenant-domain");

  if (!domain) {
    // For local dev where host might be localhost:3000
    // Attempting to find a default tenant or testing tenant
    const testTenant = await db.query.tenants.findFirst();
    if (testTenant) return testTenant;
    
    throw new Error("Tenant não identificado");
  }

  const tenant = await db.query.tenants.findFirst({
    where: eq(tenants.domain, domain)
  });

  if (!tenant) {
    throw new Error("Tenant não encontrado para o domínio: " + domain);
  }

  return tenant;
}
