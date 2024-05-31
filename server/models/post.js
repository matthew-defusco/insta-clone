import { Schema } from "mongoose";

const postSchema = new Schema(
  {
    creator: { required: true, type: Schema.Types.ObjectId, ref: "User" },
    imageUrl: { required: true, type: ref },
  },
  {
    timestamps: true,
  }
);
