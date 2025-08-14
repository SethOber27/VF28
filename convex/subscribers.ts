import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const updateportfoliosection = mutation({
  args: {
    email: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("subscribers", {
      email: args.email,
      status: args.status,
    });
  },
});
