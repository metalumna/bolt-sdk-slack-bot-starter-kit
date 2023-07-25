![Status](https://img.shields.io/badge/status-active-success.svg)
[![GitHub Issues](https://img.shields.io/github/issues/metalumna/typescript-bolt-sdk-slack-bot-starter-kit.svg)](https://github.com/metalumna/typescript-bolt-sdk-slack-bot-starter-kit/issues)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/metalumna/typescript-bolt-sdk-slack-bot-starter-kit.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
![Last Commit](https://img.shields.io/github/last-commit/metalumna/typescript-bolt-sdk-slack-bot-starter-kit)
![Stars](https://img.shields.io/github/stars/metalumna/typescript-bolt-sdk-slack-bot-starter-kit?style=social)

# Slack Bot Starter-Kit 🤖

Welcome to the ultimate Slack Bot starter kit, powered by TypeScript and Bolt SDK. This is a boilerplate project that will help you kickstart your Slack Bot development and take it to the next level!

## ⭐ Features

- An easy-to-use boilerplate project to bootstrap your own Slack bot.
- Leverages the power of TypeScript and the efficiency of Bolt SDK.
- Clear and concise codebase with detailed comments.
- Pre-configured with essential tooling for testing and development.
- Real-world app ready. Extend as you like!

## 🚀 Quick Start

1. Clone the repository:

   ```bash
   git clone https://github.com/metalumna/bolt-sdk-slack-bot-starter-kit.git
   ```

2. Move into the project directory:

   ```bash
   cd bolt-sdk-slack-bot-starter-kit
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the bot by filling out the necessary configurations (see below) and running:

   ```bash
   npm run dev
   ```

## 🔧 Configuration

1. [Create a new Slack App](https://api.slack.com/apps?new_granular_bot_app=1) or [use an existing one](https://api.slack.com/apps)
1. Go to the "Basic Information" section to find your `SLACK_SIGNING_SECRET`.
2. `SLACK_APP_TOKEN` can be found when enabling "Socket Mode".
3. `SLACK_BOT_TOKEN` can be found under the "Install App" page AFTER adding "OAuth Permissions" and installing the app to your workspace.
   - OAuth Permission: `chat:write`
   - Event Subcription: `message.im`
4. For the `SLACK_PORT`, it can remain as '8080' unless this port is already in use on your system.

A comprehensive guide, including a dive into the code is on the MetaLumna blog: [Building a Bolt Slack Bot: A Straightforward Starter-Kit Guide](https://metalumna.com/articles/building-a-bolt-slack-bot-a-straightforward-starter-kit-guide)

## 🔎 Exploring the Code

This repo houses an easy to follow codebase that covers the basics of creating a Slack bot with TypeScript and Bolt SDK. Be sure to explore the `src/` directory to find main code segments, and check out the comments for running explanation of key sections!

## 💬 Contribution

Contributions, issues, and feature requests are welcome! If you find any bugs or issues, create a new issue right away!
