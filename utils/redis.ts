import Redis from "ioredis";
import { Consts } from "./consts";

export const redis = new Redis(Consts.REDIS_URI);

export const set = (key: string, value: any, expiration = 300) => {
  redis.set(key, JSON.stringify(value), "ex", expiration);
  return;
};

export const get = async (key: string) => {
  const getRedis = await redis.get(key);

  return getRedis ? JSON.parse(getRedis) : null;
};
