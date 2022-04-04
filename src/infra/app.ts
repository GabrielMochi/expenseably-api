import express from "express";
import pino from "express-pino-logger";
import { logger } from "./logger";

export const app = express();

app.use(pino({ logger }));

app.get("/", (req, res) => {
  res.status(200).send("OK");
});
