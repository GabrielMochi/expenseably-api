import { User } from "./user.domain";

export class Bank {
  id: string;
  name: string;
  user: User;
  createdAt: Date;
}
