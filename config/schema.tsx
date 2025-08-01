import { integer, json, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { Session } from "inspector/promises";
import { number } from "motion/react";
import { report } from "process";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer()
});

export const SessionChatTable=pgTable('sessionChatTable',{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  sessionId:varchar().notNull(),
  notes:text(),
  selectedDoctor:json(),
  coversation:json(),
  report:json(),
  createdBy:varchar().references(()=>usersTable.email),
  createdOn:varchar(),

})
