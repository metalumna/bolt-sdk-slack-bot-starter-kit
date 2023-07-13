import config from "./config";
import { boltApp } from "./bolt";
import { expressApp } from "./express";

(async () => {
  // Start the Express Authentication server
  expressApp.listen(config.EXPRESS_PORT, () =>
    console.log("[server] Express is running")
  );

  // Start the Slack Bot Bolt server
  boltApp
    .start(config.SLACK_PORT)
    .then(() => console.log("[server] Bolt is running"));
})();
