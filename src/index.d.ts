import User from "@domain/User";
import "express-session";

declare module "express-session" {
  interface SessionData {
    auth: User;
  }
}
