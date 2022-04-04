import { MONGO_URI } from "@config/mongo.config";
import mongoose from "mongoose";
import { logger } from "./logger";

export const connect = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    mongoose.connect(MONGO_URI, (error) => {
      if (error) return reject(error);

      resolve();
      logger.info("mongo connection established");
    });
  });
};
