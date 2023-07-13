import config from "./config";
import { App } from "@slack/bolt";

export const boltApp = new App({
  signingSecret: config.SLACK_SIGNING_SECRET,
  token: config.SLACK_BOT_TOKEN,
  appToken: config.SLACK_APP_TOKEN,
  socketMode: true,
});

boltApp.message(async ({ message, say }) => {
  if (message.subtype === undefined || message.subtype === "bot_message") {
    await say(`Echo: ${message.text}`);
  }
});
