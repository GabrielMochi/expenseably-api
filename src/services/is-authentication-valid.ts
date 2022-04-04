import { Authentication } from "@domain/authentication.domain";
import { AuthenticationModel } from "@models/authentication.model";

export const isAuthenticationValid = async (authentication: Authentication): Promise<boolean> => {
  const count = await AuthenticationModel.findOne(authentication).count();
  return count === 1;
};
