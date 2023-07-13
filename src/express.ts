import express from "express";

// Create a new express application
export const expressApp = express();

// Define a route handler for the default home page
expressApp.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

// Define a route handler for the slack authentication route
expressApp.get("/auth/slack", (req, res) => {
  res.send("Slack authentication");
});
