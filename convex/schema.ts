import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
// Keep existing tables and add:
contacts: defineTable({
     name: v.string(),
     email: v.string(),
     message: v.string(),
}),
subscribers: defineTable({
     email: v.string(),
     status: v.string(),
}),
});