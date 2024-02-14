import { v } from "convex/values";
import { query, mutation, action } from "./_generated/server";
import { api } from "./_generated/api";

// You can write data to the database via a mutation:
export const addLocation = mutation({
    // Validators for arguments.
    args: {
      name: v.string(),
    },
  
    // Mutation implementation.
    handler: async (ctx, args) => {
      const identity = await ctx.auth.getUserIdentity();
      
      //checks that identity exists from a user
      if (identity == null || identity.tokenIdentifier == null || identity.email == null) {
        return;
      }

      const id = await ctx.db.insert("location", {name: args.name, editedby: identity.email });
  
      console.log("Added new location:", id);
    },
  });