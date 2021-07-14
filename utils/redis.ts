import Redis from "ioredis";
import { Consts } from "./consts";

export const redis = new Redis(Consts.REDIS_URI);

export const set = (key: string, value: any) => {
  redis.set(key, JSON.stringify(value), "ex", 300);
  return;
};

export const get = async (key: string) => {
  const getRedis = await redis.get(key);

  return getRedis ? JSON.parse(getRedis) : null;
};
