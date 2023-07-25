import config from "./config";
import { App } from "@slack/bolt";

// Instantiate your Bolt app with your tokens and signing secrets
export const boltApp = new App({
  signingSecret: config.SLACK_SIGNING_SECRET,
  appToken: config.SLACK_APP_TOKEN,
  token: config.SLACK_BOT_TOKEN,
  socketMode: true, // Enable Socket mode for real-time events
});

// Set up a listener for incoming Slack messages
boltApp.message(async ({ message, say }) => {
  // If the subtype is undefined or bot_message (eg a message in the bot channel), the bot will respond
  if (message.subtype === undefined || message.subtype === "bot_message") {
    // Console log the incoming message
    console.log(`Incoming message: ${message.text}`);
    // Reply to the message with an echo
    await say(`Echo: ${message.text}`);
  }
});
