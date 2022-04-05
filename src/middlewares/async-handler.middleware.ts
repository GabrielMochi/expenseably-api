import Boom from "boom";
import type { NextFunction, Request, Response } from "express";

type Handler = (req: Request, res: Response, next: NextFunction) => void;

const methods: Record<string, number> = {
  GET: 200,
  POST: 201,
  PUT: 200,
  PATCH: 200,
  DELETE: 204,
};

export const asyncHandler = (fn: Handler) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next))
    .then((response) => {
      res.status(methods[req.method] || 200).json(response);
    })
    .catch((error) => {
      next((error as Boom).isBoom ? error : Boom.internal(error));
    });
};
