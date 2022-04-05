import { User } from "@domain/user.domain";
import { NotFoundException } from "@exceptions/not-found.exception";
import { UserModel } from "@models/user.model";

export const getUserById = async (id: string): Promise<User> => {
  const user = await UserModel.findById(id);
  if (user) return user;
  throw new NotFoundException();
};
