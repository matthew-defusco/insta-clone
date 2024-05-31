import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
const { hash, compare } = bcrypt;

const userSchema = new Schema(
  {
    email: String,
    fullName: String,
    username: { type: String, unique: true },
    password: String,
    profileImagePath: {
      type: String,
      default: "profile-images/default_avatar.jpeg",
    },
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  },
  {
    timestamps: true,
  }
);

// Hashes the password before it's saved to the db
userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 12);
  }
});

// Appends a method to instances of users to be able to compare passwords
userSchema.methods.matchesPassword = async function (password) {
  return compare(password, this.password);
};

export const User = model("User", userSchema);
