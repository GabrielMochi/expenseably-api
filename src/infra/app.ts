import express from "express";
import pino from "express-pino-logger";
import { logger } from "./logger";
import session from "express-session";
import { SESSION_MAX_AGE, SESSION_SECRET, SESSION_SECURE } from "@config/session.config";

export const app = express();

app.use(pino({ logger }));

app.use(
  session({
    secret: SESSION_SECRET,
    cookie: {
      secure: SESSION_SECURE,
      maxAge: SESSION_MAX_AGE,
    },
    resave: true,
    saveUninitialized: false,
  }),
);

app.get("/", (req, res) => {
  req.session.views = req.session.views ? req.session.views + 1 : 1;
  console.log(req.session.views);
  res.json(req.session.views);
});
