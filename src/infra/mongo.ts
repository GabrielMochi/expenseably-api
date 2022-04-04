import { MONGO_URI } from "@config/mongo.config";
import mongoose from "mongoose";
import { logger } from "./logger";

export const connect = async (): Promise<void> => {
  mongoose.connect(MONGO_URI, (error) => {
    if (error) return logger.error(error);
    logger.info("mongo connection established");
  });
};
