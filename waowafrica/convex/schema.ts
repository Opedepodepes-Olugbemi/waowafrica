import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
  location: defineTable({
    name: v.string(),
    editedby: v.optional(v.string()),
  })
});