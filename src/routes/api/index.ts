import { checkAuth } from "@middlewares/check-auth.middleware";
import { Router } from "express";
import { v1 } from "./v1";

export const api = Router();

api.use(checkAuth);

api.use("/v1", v1);
