import User from "./user.domain";

export default interface Bank {
  id: string;
  name: string;
  user: User;
  createdAt: Date;
}
