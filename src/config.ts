import "dotenv/config";

class EnvVars {
  EXPRESS_PORT = 8081;
  SLACK_SIGNING_SECRET = "";
  SLACK_BOT_TOKEN = "";
  SLACK_APP_TOKEN = "";
  SLACK_PORT = 8080;
}

interface IEnvVars extends EnvVars {}
type EnvVarsArray = Array<keyof IEnvVars>;

function processEnvVars(envVars: EnvVarsArray): IEnvVars {
  let isError = false;
  const processedEnvVars = Object.fromEntries(
    envVars.map((key) => {
      const envVar = process.env[key] ?? "";
      if (!envVar) {
        console.error("Environment Variable is undefined: ", key);
        isError = true;
      }
      return [key, envVar];
    })
  ) as unknown as EnvVars;

  if (isError) process.exit(1);
  return processedEnvVars;
}

export default processEnvVars(Object.keys(new EnvVars()) as EnvVarsArray);
