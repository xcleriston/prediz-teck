import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { attachDatabasePool } from "@vercel/functions";
import * as schema from "../drizzle/schema";

declare global {
  // eslint-disable-next-line no-var
  var __db_pool__: Pool | undefined;
}

const createPool = () => {
  return new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 3, // crítico para Vercel
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 5000
  });
};

const pool = global.__db_pool__ ?? createPool();

// Evita recriação em dev (hot reload)
if (process.env.NODE_ENV !== "production") {
  global.__db_pool__ = pool;
}

// 🔥 Integração oficial Vercel (evita leaks)
attachDatabasePool(pool);

// Drizzle ORM
export const db = drizzle(pool, { schema });
