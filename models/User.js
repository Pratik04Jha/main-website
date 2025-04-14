// models/user.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, unique: true, sparse: true },
    displayName: { type: String },
    avatar: { type: String },
    bio: { type: String },
    password: { type: String, required: true },  // <-- Add this!
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
