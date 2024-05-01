import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
const { hash, compare } = bcrypt;

const userSchema = new Schema(
  {
    email: String,
    fullName: String,
    username: String,
    password: String,
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
userSchema.methods.matchesPassword = function (password) {
  return compare(password, this.password);
};
export const User = model("User", userSchema);
