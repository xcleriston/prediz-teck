import {
  pgTable,
  uuid,
  text,
  timestamp,
  numeric,
  boolean,
  integer,
  pgEnum,
  index
} from "drizzle-orm/pg-core";

// ENUMS
export const marketStatusEnum = pgEnum("market_status", [
  "draft",
  "active",
  "paused",
  "resolved",
  "cancelled"
]);

export const betSideEnum = pgEnum("bet_side", ["yes", "no"]);

export const paymentStatusEnum = pgEnum("payment_status", [
  "pending",
  "completed",
  "failed"
]);

export const kycStatusEnum = pgEnum("kyc_status", [
  "not_started",
  "pending",
  "approved",
  "rejected"
]);

export const userRoleEnum = pgEnum("user_role", [
  "user",
  "admin",
  "super_admin"
]);

// TENANTS
export const tenants = pgTable("tenants", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  domain: text("domain").unique().notNull(),
  logo_url: text("logo_url"),
  primary_color: text("primary_color"),
  secondary_color: text("secondary_color"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow()
});

// USERS
export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  tenant_id: uuid("tenant_id").references(() => tenants.id),
  email: text("email").notNull(),
  name: text("name"),
  avatar_url: text("avatar_url"),
  balance: numeric("balance").default("0"),
  role: userRoleEnum("role").default("user"),
  kyc_status: kycStatusEnum("kyc_status").default("not_started"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow()
}, (table) => ({
  tenantIdx: index("users_tenant_idx").on(table.tenant_id)
}));

// MARKETS
export const markets = pgTable("markets", {
  id: uuid("id").primaryKey().defaultRandom(),
  tenant_id: uuid("tenant_id").references(() => tenants.id),
  title: text("title").notNull(),
  description: text("description"),
  image_url: text("image_url"),
  status: marketStatusEnum("status").default("draft"),

  // LMSR
  liquidity_b: numeric("liquidity_b").notNull(),
  q_yes: numeric("q_yes").default("0"),
  q_no: numeric("q_no").default("0"),

  closes_at: timestamp("closes_at"),
  resolved_at: timestamp("resolved_at"),
  outcome: betSideEnum("outcome"),

  created_by: uuid("created_by"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow()
}, (table) => ({
  tenantIdx: index("markets_tenant_idx").on(table.tenant_id)
}));

// BETS
export const bets = pgTable("bets", {
  id: uuid("id").primaryKey().defaultRandom(),
  tenant_id: uuid("tenant_id").references(() => tenants.id),
  user_id: uuid("user_id").references(() => users.id),
  market_id: uuid("market_id").references(() => markets.id),
  side: betSideEnum("side"),
  amount: numeric("amount").notNull(),
  shares: numeric("shares").notNull(),
  avg_price: numeric("avg_price").notNull(),
  created_at: timestamp("created_at").defaultNow()
}, (table) => ({
  marketIdx: index("bets_market_idx").on(table.market_id),
  userIdx: index("bets_user_idx").on(table.user_id)
}));

// PAYMENTS
export const payments = pgTable("payments", {
  id: uuid("id").primaryKey().defaultRandom(),
  tenant_id: uuid("tenant_id").references(() => tenants.id),
  user_id: uuid("user_id").references(() => users.id),
  amount: numeric("amount"),
  status: paymentStatusEnum("status"),
  provider: text("provider"),
  created_at: timestamp("created_at").defaultNow()
});

// KYC
export const kycVerifications = pgTable("kyc_verifications", {
  id: uuid("id").primaryKey().defaultRandom(),
  tenant_id: uuid("tenant_id").references(() => tenants.id),
  user_id: uuid("user_id").references(() => users.id),
  status: kycStatusEnum("status"),
  provider: text("provider"),
  created_at: timestamp("created_at").defaultNow()
});
