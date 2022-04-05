import { authenticationSchema } from "@schemas/authentication.schema";
import { model } from "mongoose";

export const AuthenticationModel = model("Authentication", authenticationSchema);
