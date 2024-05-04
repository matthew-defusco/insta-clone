import express from "express";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import { auth } from "./routes/index.js";
// import mongoose from "mongoose";
import { client } from "./db/index.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({
      // use the client already set up with mongoose to limit connections
      clientPromise: client,
    }),
    cookie: {
      secure: false,
      // 30 minute idle timeout
      maxAge: 1000 * 60 * 30,
      sameSite: false,
      httpOnly: true,
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

app.use(auth);

app.use((err, req, res, next) => {
  // console.log(err);
  res.status(500).json({ error: err.message });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
