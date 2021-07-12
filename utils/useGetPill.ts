import useSWR from "swr";
import { fetcher } from "./fetcher";
import { CurrentResponse } from "openweathermap-ts/dist/types";

export const useGetPill = (lat: string, lon: string) => {
  const { data, error } = useSWR(`/api/weather/pill/${lat}/${lon}`, fetcher);

  return {
    weather: data as CurrentResponse,
    isLoading: !error && !data,
    isError: error,
  };
};
