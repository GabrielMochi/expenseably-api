import "module-alias/register";
import "reflect-metadata";
import "@infra/env-loader";

import { PORT } from "@config/app.config";
import { app } from "@infra/app";
import { logger } from "@infra/logger";
import { connect as connectMongo } from "@infra/mongo";

async function main() {
  try {
    await connectMongo();

    app.listen(PORT, () => {
      logger.info(`server is running on port: ${PORT}`);
    });
  } catch (error) {
    logger.error(error);
  }
}

main();
