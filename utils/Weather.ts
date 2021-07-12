import InitWeather from "openweathermap-ts";
import { Consts } from "./consts";

export const Weather = new InitWeather({
  apiKey: Consts.API_KEY,
  language: "EN",
});
