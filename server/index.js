import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({});
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
