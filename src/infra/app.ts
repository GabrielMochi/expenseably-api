import express from "express";
import pino from "express-pino-logger";
import { logger } from "./logger";
import session from "express-session";
import redisStoreFactory from "connect-redis";
import { SESSION_MAX_AGE, SESSION_SECRET, SESSION_SECURE } from "@config/session.config";
import { redisClient } from "./redis";

export const app = express();

const RedisStore = redisStoreFactory(session);

app.use(pino({ logger }));

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
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
  res.json(req.session.views);
});
