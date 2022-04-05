import { User } from "@domain/user.domain";
import { NotFoundException } from "@exceptions/not-found.exception";
import { UserModel } from "@models/user.model";

export const getUserByEmail = async (email: string): Promise<User> => {
  const user = await UserModel.findOne({ email });
  if (user) return user;
  throw new NotFoundException();
};
