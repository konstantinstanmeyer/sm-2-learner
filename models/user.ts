import mongoose, { Schema, models } from "mongoose";
import cardSchema from "./card"

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    cards: [cardSchema]
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;