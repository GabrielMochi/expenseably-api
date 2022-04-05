import { User } from "@domain/user.domain";
import { getUserByEmail as getUserByEmailService } from "@services/user/get-user-by-email.service";
import { getUserById as getUserByIdService } from "@services/user/get-user-by-id.service";

export class UserController {
  public async getUserById(id: string): Promise<User> {
    const user = await getUserByIdService(id);
    return user;
  }
  public async getUserByEmail(email: string): Promise<User> {
    const user = await getUserByEmailService(email);
    return user;
  }
}
