// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Consts } from "../../../utils/consts";
import InitWeather from "openweathermap-ts";
import { Weather } from "../../../types/types";

const weatherReq = new InitWeather({ apiKey: Consts.API_KEY, language: "EN" });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cityName = req.query.city;

  const currentWeather = await weatherReq.getCurrentWeatherByCityName({
    cityName: cityName as string,
  });

  if (Number(currentWeather.cod) === 404)
    return res
      .status(404)
      .json({ success: false, message: "We couldn't find that city!" });

  const threeHourWeather = await weatherReq.getThreeHourForecastByCityName({
    cityName: cityName as string,
  });

  res.status(200).json({
    success: true,
    ...currentWeather,
    ...threeHourWeather,
  });
}
