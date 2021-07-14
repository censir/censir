import useSWR from "swr";
import { fetcher } from "./fetcher";
import { Weather } from "@/types/types";

export const useGetWeatherByCity = (city: string, country: string) => {
  const { data, error } = useSWR(`/api/weather/${city}/${country}`, fetcher);

  return {
    weather: data as Weather,
    isLoading: !error && !data,
    isError: error,
  };
};
