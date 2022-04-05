import { User } from "@domain/user.domain";
import "express-session";

declare module "express-session" {
  interface SessionData {
    auth: User;
  }
}
