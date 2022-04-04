import Authentication from "@domain/authentication.domain";
import { validateLogin } from "@services/validate-login";

interface ValidationLoginResponse {
  authenticated: boolean;
}

export class AuthController {
  public async validateLogin(authentication: Authentication): Promise<ValidationLoginResponse> {
    const authenticated = await validateLogin(authentication);
    return { authenticated };
  }
}
