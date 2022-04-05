import { AuthController } from "@controllers/auth.controller";
import { UserController } from "@controllers/user.controller";
import { Authentication } from "@domain/authentication.domain";
import { asyncHandler } from "@middlewares/async-handler.middleware";
import { validation } from "@middlewares/validation.middleware";
import Boom from "boom";
import { Router } from "express";

export const auth = Router();

const authController = new AuthController();
const userController = new UserController();

auth.get("/", (req, res) => {
  res.json({ authenticated: !!req.session.auth });
});

auth.post(
  "/",
  validation(Authentication),
  asyncHandler(async (req) => {
    const isValid = await authController.isAuthenticationValid(req.body);

    if (isValid) {
      const user = await userController.getUserByEmail(req.body.username);
      req.session.auth = user;
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
