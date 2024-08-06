const env = process.env.NODE_ENV || "local";
if (env === "local") require("dotenv").config({ path: "./.env" });

const dbConfig = {
  local: {
    username: process.env.USER_USERNAME,
    password: process.env.USER_DB_PASSWORD,
    database: process.env.USER_DB_NAME,
    host: process.env.USER_DB_INSTANCE_URL,
    port: process.env.USER_DB_PORT,
    dialect: "postgres",
  },
  development: {
    username: process.env.USER_USERNAME,
    password: process.env.USER_DB_PASSWORD,
    database: process.env.USER_DB_NAME,
    host: process.env.USER_DB_INSTANCE_URL,
    port: process.env.USER_DB_PORT,
    dialect: "postgres",
  },
  beta: {
    username: process.env.USER_USERNAME,
    password: process.env.USER_DB_PASSWORD,
    database: process.env.USER_DB_NAME,
    host: process.env.USER_DB_INSTANCE_URL,
    port: process.env.USER_DB_PORT,
    dialect: "postgres",
  },
  production: {
    username: process.env.USER_USERNAME,
    password: process.env.USER_DB_PASSWORD,
    database: process.env.USER_DB_NAME,
    host: process.env.USER_DB_INSTANCE_URL,
    port: process.env.USER_DB_PORT,
    dialect: "postgres",
  },
};

const deepFreeze = (obj) => {
  if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((prop) => deepFreeze(obj[prop]));
  }
  return obj;
};

module.exports = deepFreeze(dbConfig);
