import { UserController } from "@controllers/user.controller";
import { NotFoundException } from "@exceptions/not-found.exception";
import { asyncHandler } from "@middlewares/async-handler.middleware";
import { notFound } from "@hapi/boom";
import { Router } from "express";

export const user = Router();

const userController = new UserController();

user.get(
  "/",
  asyncHandler(async (req) => {
    try {
      const user = await userController.getUserById(req.session.auth.id);
      return { user };
    } catch (error) {
      if (error instanceof NotFoundException) throw notFound();
      throw error;
    }
  }),
);
