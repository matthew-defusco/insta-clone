import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    imageName: { required: true, type: String },
    comments: [
      { body: String, author: { type: Schema.Types.ObjectId, ref: "User" } },
    ],
    caption: { required: true, type: String },
    likes: { required: true, type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const Post = model("Post", postSchema);
