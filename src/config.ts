import "dotenv/config";

class EnvVars {
  // Define required environment variables with dummy or default values
  EXPRESS_PORT = 8081; // Default PORT for Express Server
  SLACK_SIGNING_SECRET = "";
  SLACK_APP_TOKEN = "";
  SLACK_BOT_TOKEN = "";
  SLACK_PORT = 8080; // Default PORT for Slack app
}

// Define interface and type for our environment variables
interface IEnvVars extends EnvVars {}
type EnvVarsArray = Array<keyof IEnvVars>;

function processEnvVars(envVars: EnvVarsArray): IEnvVars {
  let isError = false;

  // Check if all our environment variables have been set
  const processedEnvVars = Object.fromEntries(
    envVars.map((key) => {
      const envVar = process.env[key] ?? "";

      // If not, print an error message and set the error flag
      if (!envVar) {
        console.error("Environment Variable is undefined: ", key);
        isError = true;
      }

      // Return the key-value pair of the environment variables
      return [key, envVar];
    })
  ) as unknown as EnvVars;

  // If there were any errors, exit the process
  if (isError) process.exit(1);

  // Return our environment variables
  return processedEnvVars;
}

// Default export of our processed environment variables
export default processEnvVars(Object.keys(new EnvVars()) as EnvVarsArray);
