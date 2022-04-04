import type { NextFunction, Request, Response } from "express";
import { unauthorized } from "boom";

const allowedPaths = ["/api/v1/auth/"];

export const checkAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (allowedPaths.some((path) => path.includes(req.path)) || !!req.session.auth) return next();
  throw unauthorized();
};
