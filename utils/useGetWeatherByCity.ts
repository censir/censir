import useSWR from "swr";
import { CurrentResponse } from "openweathermap-ts/dist/types/index";

export const useGetWeatherByCity = (city: string) => {
  const { data, error } = useSWR(`/api/weather/${city}`);

  return {
    weather: data as CurrentResponse,
    isLoading: !error && !data,
    isError: error,
  };
};
