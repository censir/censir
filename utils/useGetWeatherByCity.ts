import useSWR from "swr";
import { fetcher } from "./fetcher";
import { Weather } from "../types/types";

export const useGetWeatherByCity = (city: string) => {
  const { data, error } = useSWR(`/api/weather/${city}`, fetcher);

  return {
    weather: data as Weather,
    isLoading: !error && !data,
    isError: error,
  };
};
