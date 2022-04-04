import type { NextFunction, Request, Response } from "express";
import Boom from "boom";
import { logger } from "@infra/logger";

export const errorHandler = (
  error: unknown | Boom,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (!error) return next();

  if ((error as Boom).isServer || (error as Boom).isServer === undefined) logger.error(error);

  if ((error as Boom).isBoom) {
    res.status((error as Boom).output.statusCode).json((error as Boom).output.payload);
    return;
  }

  const internalError = Boom.internal();
  res.status(internalError.output.statusCode).json(internalError.output.payload);
};
