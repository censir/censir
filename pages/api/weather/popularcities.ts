import type { NextApiRequest, NextApiResponse } from "next";
import { Consts } from "@/utils/consts";
import { Weather } from "@/utils/Weather";
import { set, get } from "@/utils/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cache = await get("popularCities");

  if (cache)
    return res.json({
      success: true,
      popularCityWeather: cache,
    });

  const weatherData = await fetch(
    `http://api.openweathermap.org/data/2.5/group?id=2643743,5206379,5128581,4843353&appid=${Consts.API_KEY}&units=imperial`
  ).then((res) => res.json());

  if (!weatherData)
    return res.status(500).json({
      success: false,
      message: "An error occurred whilst getting those cities data!",
    });

  set("popularCities", weatherData, 1200);

  return res.json({
    success: true,
    popularCityWeather: weatherData,
  });
}
