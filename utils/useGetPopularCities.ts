import useSWR from "swr";
import { fetcher } from "./fetcher";

export const useGetPopularCities = () => {
  const { data, error } = useSWR("/api/weather/popularcities", fetcher);

  return {
    weather: data,
    isLoading: !error && !data,
    isError: error,
  };
};
