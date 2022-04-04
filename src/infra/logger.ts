import { IS_DEVELOPMENT } from "@config/app.config";
import pino from "pino";

export const logger = pino(
  IS_DEVELOPMENT
    ? {
        transport: {
          target: "pino-pretty",
        },
      }
    : {},
);
