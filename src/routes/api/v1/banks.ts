import { Router } from "express";

export const banks = Router();

banks.get("/", () => {
  throw new Error("method not implemented");
});

banks.get("/:id/transactions", () => {
  throw new Error("method not implemented");
});

banks.post("/", () => {
  throw new Error("method not implemented");
});

banks.put("/:id", () => {
  throw new Error("method not implemented");
});

banks.delete("/:id", () => {
  throw new Error("method not implemented");
});
