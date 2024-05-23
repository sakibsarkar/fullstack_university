import dotenv from "dotenv";
dotenv.config();
const Config = {
  dbUser: process.env.MONGO_NAME,
  dbPass: process.env.MONGO_PASS,
  dbName: process.env.MONGO_DBNAME,
  bcrypt_salt_rounds:process.env.SALT_ROUND,
  default_password:process.env.DEFAULT_PASS
};

export default Config;
