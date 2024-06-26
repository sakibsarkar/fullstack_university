"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Config = {
    dbUser: process.env.MONGO_NAME,
    dbPass: process.env.MONGO_PASS,
    dbName: process.env.MONGO_DBNAME,
    bcrypt_salt_rounds: process.env.SALT_ROUND,
    default_password: process.env.DEFAULT_PASS,
    nodeEnv: process.env.NODE_ENV,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_access_expires_in: "1d",
    jwt_refresh_expires_in: "120d",
    mail: process.env.MAIL,
    mailPass: process.env.MAILPASS,
    cloudinaryApiKey: process.env.CLOUD_API_KEY,
    cloudName: process.env.CLOUD_NAME,
    cloudSecret: process.env.CLOUD_SECRET,
};
exports.default = Config;
