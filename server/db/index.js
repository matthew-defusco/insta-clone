import mongoose from "mongoose";

export const client = mongoose
  .connect(process.env.MONGO_URI)
  .then(m => m.connection.getClient());
