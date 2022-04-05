import { AuthController } from "@controllers/auth.controller";
import { Authentication } from "@domain/authentication.domain";
import { asyncHandler } from "@middlewares/async-handler.middleware";
import { validation } from "@middlewares/validation.middleware";
import Boom from "boom";
import { Router } from "express";

export const auth = Router();

const authController = new AuthController();

auth.get("/", (req, res) => {
  res.json({ authenticated: !!req.session.auth });
});

auth.post(
  "/",
  validation(Authentication),
  asyncHandler(async (req) => {
    const isValid = await authController.isAuthenticationValid(req.body);

    if (isValid) {
      // TODO: load real user
      req.session.auth = req.body.username;
      return;
    }

    throw Boom.unauthorized();
  }),
);

auth.delete("/", (req, res, next) => {
  req.session.destroy((error) => {
    if (error) return next(error);
    res.status(204).json();
  });
});
