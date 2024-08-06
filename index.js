const env = process.env.NODE_ENV || "local";
const requiredEnvVariables = [
  "NODE_ENV",
  "USER_USERNAME",
  "USER_DB_PASSWORD",
  "USER_DB_NAME",
  " USER_DB_INSTANCE_URL",
  "USER_DB_PORT",
];
for (const envVar of requiredEnvVariables) {
  if (!process.env[envVar]) {
    throw new Error(
      `${envVar} is required but not found in the environment variables`
    );
  }
}
const db = require("./models");

module.exports = db;
