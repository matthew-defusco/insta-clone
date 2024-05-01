import express from "express";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import { auth } from "./routes/index.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.ORIGIN || "http://localhost:5173",
  })
);

const client = mongoose
  .connect(process.env.MONGO_URI)
  .then(m => m.connection.getClient());

app.use(
  session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({
      // use the client already set up with mongoose to limit connections
      clientPromise: client,
      // dbName: "insta-clone",
    }),
    cookie: {
      secure: false,
      // 30 minute idle timeout
      maxAge: 1000 * 60 * 30,
      sameSite: true,
    },
    rolling: true,
    resave: false,
    saveUninitialized: false,
    // deletes the session from the db
    unset: "destroy",
  })
);

app.get("/", (req, res) => {
  res.send({ message: "OK" });
});

app.get("/api/session", (req, res) => {
  const user = req.session.user;
  res.send(user);
});

app.use(auth);

app.use((err, req, res, next) => {
  // console.log(err);
  res.status(500).json({ error: err.message });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
