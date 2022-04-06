import { MONGO_URI } from "@config/mongo.config";
import mongoose from "mongoose";
import { logger } from "../logger";
import { bootstrap } from "./bootstrap";

export const connect = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    mongoose.connect(MONGO_URI, (error) => {
      if (error) return reject(error);

      bootstrap()
        .then(() => {
          resolve();
          logger.info("mongo connection established");
        })
        .catch(reject);
    });
  });
};
