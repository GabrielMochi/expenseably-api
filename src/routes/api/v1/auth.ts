import { Router } from "express";

export const auth = Router();

auth.get("/", () => {
  throw new Error("method not implemented");
});

auth.post("/", () => {
  throw new Error("method not implemented");
});

auth.delete("/", () => {
  throw new Error("method not implemented");
});
