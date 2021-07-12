import { NextApiRequest, NextApiResponse } from "next";
import { checkValidCountry } from "../../../../../utils/checkValidCountry";

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

    const currentWeather = 

  res.status(200).json({
    city,
    country,
  });
}
