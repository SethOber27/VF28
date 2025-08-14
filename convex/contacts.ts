import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addportfoliosection = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("contacts", {
      name: args.name,
      email: args.email,
      message: args.message,
    });
  },
});
