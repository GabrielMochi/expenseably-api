import { Router } from "express";
import { auth } from "./auth";
import { banks } from "./banks";
import { transactions } from "./transactions";
import { user } from "./user";

export const v1 = Router();

v1.use("/auth", auth);
v1.use("/user", user);
v1.use("/banks", banks);
v1.use("/transactions", transactions);
