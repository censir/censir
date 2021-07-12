import { NextApiRequest, NextApiResponse } from "next";
import { CountryCode } from "openweathermap-ts/dist/types";
import { checkValidCountry } from "../../../../../utils/checkValidCountry";
import { Weather } from "../../../../../utils/Weather";

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

  const currentWeather = await Weather.getCurrentWeatherByCityName({
    cityName: city as string,
    countryCode: country as CountryCode,
  });

  if (Number(currentWeather.cod) === 404)
    return res.status(404).json({
      success: false,
      message: "We couldn't find that city!",
    });

  res.json(currentWeather);
}
