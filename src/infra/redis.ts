import { REDIS_HOST, REDIS_PORT } from "@config/redis.config";
import { createClient } from "redis";
import { logger } from "./logger";

export const redisClient = createClient({
  host: REDIS_HOST,
  port: Number(REDIS_PORT),
});

redisClient.on("ready", () => {
  logger.info("redis connection established");
});

redisClient.on("error", (error) => {
  logger.error(error);
  process.exit(1);
});
