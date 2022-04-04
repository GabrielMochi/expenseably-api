import Authentication from "@domain/authentication.domain";
import { AuthenticationModel } from "src/entities/models/authentication.model";

export const validateLogin = async (authentication: Authentication): Promise<boolean> => {
  const count = await AuthenticationModel.findOne(authentication).count();
  return count === 1;
};
