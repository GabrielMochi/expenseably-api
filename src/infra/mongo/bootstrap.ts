/**
 * !!! This bootstrap configuration is temporary until User CRUD is implemented.
 */

import { logger } from "@infra/logger";
import { AuthenticationModel } from "@models/authentication.model";
import { UserModel } from "@models/user.model";
import md5 from "md5";

const email = "walter_white@gmail.com";
const password = md5("HelloWorld@123");
const name = "Walter White";

export const bootstrap = async (): Promise<void> => {
  const user = await UserModel.findOne({ email });
  const authentication = await AuthenticationModel.findOne({ username: email });

  if (!user) {
    const newUser = new UserModel({ email, name });
    await newUser.save();
    logger.info(`user ${email} created`);
  }

  if (!authentication) {
    const newAuthentication = new AuthenticationModel({ username: email, password });
    await newAuthentication.save();
    logger.info(`authentication for the user ${email} created`);
  }
};
