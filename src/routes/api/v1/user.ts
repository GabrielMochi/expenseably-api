import { Router } from "express";

export const user = Router();

user.get("/", () => {
  throw new Error("method not implemented");
});
