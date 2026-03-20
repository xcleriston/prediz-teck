import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "../drizzle/schema";

// Singleton pool — avoids connection leaks on hot reload in dev
// and reuses the same connection across serverless invocations
declare global {
  // eslint-disable-next-line no-var
  var __db_pool__: Pool | undefined;
}

function createPool() {
  return new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 3,
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 10000,
    ssl: process.env.DATABASE_URL?.includes("supabase.co")
      ? { rejectUnauthorized: false }
      : false,
  });
}

// In development, use a global singleton to survive hot reloads.
// In production (serverless), create a new pool each cold start.
const pool =
  process.env.NODE_ENV === "development"
    ? (global.__db_pool__ ??= createPool())
    : createPool();

export const db = drizzle(pool, { schema });
