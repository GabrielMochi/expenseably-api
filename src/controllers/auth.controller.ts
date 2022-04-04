import { Authentication } from "@domain/authentication.domain";
import { isAuthenticationValid } from "@services/is-authentication-valid";

export class AuthController {
  public async isAuthenticationValid(authentication: Authentication): Promise<boolean> {
    const isValid = await isAuthenticationValid(authentication);
    return isValid;
  }
}
