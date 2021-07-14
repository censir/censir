import { NextApiRequest, NextApiResponse } from "next";
import { Weather } from "@/utils/Weather";
import { set, get } from "@/utils/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const lat = Number(req.query.lat);
  const lon = Number(req.query.lon);
  const cache = await get(`${lat} ${lon}`);

  if (cache)
    return res.json({
      success: true,
      ...cache,
    });

  const currentWeather = await Weather.getCurrentWeatherByGeoCoordinates(
    lat,
    lon
  );

  if (Number(currentWeather.cod) === 400)
    return res.status(400).json({
      success: false,
      message: "Bad latitude or longitude!",
    });

  set(`${lat} ${lon}`, { ...currentWeather });
  res.json({
    success: true,
    ...currentWeather,
  });
}
