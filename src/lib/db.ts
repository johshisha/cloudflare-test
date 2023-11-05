import { neon, neonConfig } from "@neondatabase/serverless";
import {
  PgBooleanBuilder,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
export const db = drizzle(sql, { logger: true });

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  avatar: varchar("avatar", { length: 256 }).notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});
