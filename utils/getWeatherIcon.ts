export const getWeatherIcon = (id: number): string => {
  switch (true) {
    case id >= 200 && id < 232:
      return "/img/weatherIcons/thunder.svg";

    case id >= 300 && id <= 321:
      return "/img/weatherIcons/drizzle.svg";

    case id >= 500 && id <= 531:
      return "/img/weatherIcons/rain.svg";

    case id >= 600 && id <= 622:
      return "/img/weatherIcons/snow.svg";

    case id >= 701 && id <= 781:
      return "/img/weatherIcons/fog.svg";

    case id >= 801 && id <= 804:
      return "/img/weatherIcons/cloudy.svg";

    default:
      return "/img/weatherIcons/sunny.svg";
  }
};
