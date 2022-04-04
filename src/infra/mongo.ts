import { MONGO_URI } from "@config/mongo.config";
import mongoose from "mongoose";
import { logger } from "./logger";

export const connect = (): void => {
  mongoose.connect(MONGO_URI, (error) => {
    if (error) {
      logger.error(error);
      process.exit(1);
    }

    logger.info("mongo connection established");
  });
};
