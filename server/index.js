import express from "express";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import { auth, posts } from "./routes/index.js";
import { client } from "./db/index.js";
import { config } from "./config.js";

const PORT = process.env.PORT || 3000;
const app = express();
const URL = config.url;
app.use(
  cors({
    origin: [URL],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({
      // use the client already set up with mongoose to limit connections
      clientPromise: client,
    }),
    cookie: {
      secure: true,
      sameSite: "none",
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
  res.send({ message: "OK" });
});

app.use(auth);
app.use(posts);

app.use((err, req, res, next) => {
  // console.log(err);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
