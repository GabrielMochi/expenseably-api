import { Authentication } from "@domain/authentication.domain";
import { isAuthenticationValid } from "@services/is-authentication-valid";
import md5 from "md5";

export class AuthController {
  public async isAuthenticationValid({ username, password }: Authentication): Promise<boolean> {
    const isValid = await isAuthenticationValid({ username, password: md5(password) });
    return isValid;
  }
}
