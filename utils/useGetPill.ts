import useSWR from "swr";
import { fetcher } from "./fetcher";
import { CurrentResponse } from "../types";

export const useGetPill = (lat: number | null, lon: number | null) => {
  const { data, error } = useSWR(
    lat && lon ? `/api/weather/pill/${lat}/${lon}` : null,
    fetcher
  );

  return {
    weather: data as CurrentResponse,
    isLoading: !error && !data,
    isError: error,
  };
};
