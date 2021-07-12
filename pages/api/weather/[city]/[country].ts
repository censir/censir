// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Consts } from "../../../../utils/consts";
import InitWeather from "openweathermap-ts";
import { checkValidCountry } from "../../../../utils/checkValidCountry";
import { CountryCode } from "openweathermap-ts/dist/types";

const weatherReq = new InitWeather({ apiKey: Consts.API_KEY, language: "EN" });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const city = req.query.city;
  const country = req.query.country;

  if (!checkValidCountry(country as string))
    return res.status(400).json({
      success: false,
      message: "Invalid country code!",
    });

  const currentWeather = await weatherReq.getCurrentWeatherByCityName({
    cityName: city as string,
    countryCode: country as CountryCode,
  });

  if (Number(currentWeather.cod) === 404)
    return res
      .status(404)
      .json({ success: false, message: "We couldn't find that city!" });

  const threeHourWeather = await weatherReq.getThreeHourForecastByCityName({
    cityName: city as string,
  });

  res.status(200).json({
    success: true,
    ...currentWeather,
    ...threeHourWeather,
  });
}
