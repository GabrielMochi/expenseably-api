import { IS_DEVELOPMENT } from "./app.config";

export const SESSION_SECRET = process.env.SESSION_SECRET;
export const SESSION_SECURE = !IS_DEVELOPMENT;
export const SESSION_MAX_AGE = 2 * 60 * 60 * 1000; // two hours
