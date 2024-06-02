import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    creator: { required: true, type: Schema.Types.ObjectId, ref: "User" },
    imageUrl: { required: true, type: String },
    comments: [
      { body: String, author: { type: Schema.Types.ObjectId, ref: "User" } },
    ],
    caption: { required: true, type: String },
  },
  {
    timestamps: true,
  }
);

export const Post = model("Post", postSchema);
