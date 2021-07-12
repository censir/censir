// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Consts } from "../../../utils/consts";
import InitWeather from "openweathermap-ts";

const weatherReq = new InitWeather({ apiKey: Consts.API_KEY, language: "EN" });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cityName = "London";
  const currentWeather = await weatherReq.getCurrentWeatherByCityName({
    cityName,
  });

  if (currentWeather.cod === 404)
    return res
      .status(404)
      .json({ success: false, message: "We couldn't find that city!" });

  const threeHourWeather = await weatherReq.getThreeHourForecastByCityName({
    cityName,
  });

  res.status(200).json({ ...currentWeather, ...threeHourWeather });
}
