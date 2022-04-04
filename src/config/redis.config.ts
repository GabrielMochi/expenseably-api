export const REDIS_HOST = process.env.REDIS_HOST;
export const REDIS_PORT = process.env.REDIS_PORT;
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
export const REDIS_URI = `redis://:${encodeURI(REDIS_PASSWORD)}@${REDIS_HOST}:${REDIS_PORT}`;
