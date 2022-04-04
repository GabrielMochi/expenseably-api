import type { NextFunction, Request, Response } from "express";
import { unauthorized } from "boom";

const allowedPaths = ["/api/v1/auth", "/health"];

export const checkAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (allowedPaths.includes(req.path) || !!req.session.auth) return next();
  throw unauthorized();
};
