import Boom from "boom";
import type { NextFunction, Request, Response } from "express";

type Handler = (req: Request, res: Response, next: NextFunction) => void;

export const asyncHandler = (fn: Handler) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch((error) => {
    next((error as Boom).isBoom ? error : Boom.internal(error));
  });
};
