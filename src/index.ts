import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.listen(5000, () => {
  console.log(500);
});
