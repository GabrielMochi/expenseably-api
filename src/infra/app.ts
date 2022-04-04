import express from "express";
import pino from "express-pino-logger";
import { logger } from "./logger";
import session from "express-session";
import redisStoreFactory from "connect-redis";
import { SESSION_MAX_AGE, SESSION_SECRET, SESSION_SECURE } from "@config/session.config";
import { redisClient } from "./redis";
import cors from "cors";
import { ALLOWED_ORIGIN } from "@config/cors.config";
import { routes } from "@routes/index";
import { checkAuth } from "@middlewares/check-auth.middleware";

export const app = express();

const RedisStore = redisStoreFactory(session);

app.use(pino({ logger }));

app.set("trust proxy", 1);

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

app.use(cors({ origin: ALLOWED_ORIGIN, credentials: true }));

app.use(checkAuth);

app.use("/", routes);

app.get("/health", (req, res) => {
  res.json({ health: "ok" });
});
