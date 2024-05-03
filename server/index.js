import express from "express";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import { auth } from "./routes/index.js";
import mongoose from "mongoose";

const app = express();
// app.options(cors("*"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

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
    }),
    cookie: {
      secure: false,
      // 30 minute idle timeout
      maxAge: 1000 * 60 * 30,
    },
    rolling: true,
    resave: false,
    saveUninitialized: false,
    // deletes the session from the db
    unset: "destroy",
  })
);

app.get("/", (req, res) => {
  res.send({ message: "OK", user: req.session.user });
});

app.use(auth);

app.use((err, req, res, next) => {
  // console.log(err);
  res.status(500).json({ error: err.message });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
