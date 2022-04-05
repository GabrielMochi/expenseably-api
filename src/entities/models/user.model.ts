import { userSchema } from "@infra/mongo/schemas/user.schema";
import { model } from "mongoose";

export const UserModel = model("User", userSchema);
