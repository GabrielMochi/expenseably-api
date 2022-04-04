import "module-alias/register";
import "@infra/env-loader";

import { PORT } from "@config/app.config";
import { app } from "@infra/app";
import { logger } from "@infra/logger";

async function main() {
  app.listen(PORT, () => {
    logger.info(`server is running on port: ${PORT}`);
  });
}

main();
