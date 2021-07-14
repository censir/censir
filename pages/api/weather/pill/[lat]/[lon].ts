import { NextApiRequest, NextApiResponse } from "next";
import { Weather } from "@/utils/Weather";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const lat = Number(req.query.lat);
  const lon = Number(req.query.lon);

  const currentWeather = await Weather.getCurrentWeatherByGeoCoordinates(
    lat,
    lon
  );

  if (Number(currentWeather.cod) === 400)
    return res.status(400).json({
      success: false,
      message: "Bad latitude or longitude!",
    });

  res.json(currentWeather);
}
