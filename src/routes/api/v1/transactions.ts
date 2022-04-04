import { Router } from "express";

export const transactions = Router();

transactions.post("/", () => {
  throw new Error("method not implemented");
});

transactions.put("/:id", () => {
  throw new Error("method not implemented");
});

transactions.delete("/:id", () => {
  throw new Error("method not implemented");
});
