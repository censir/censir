import useSWR from "swr";
import { useRouter } from "next/router";
import { useGetWeatherByCity } from "../../utils/useGetWeatherByCity";

export default function Country(): JSX.Element {
  const { query } = useRouter();

  const { weather, isError, isLoading } = useGetWeatherByCity(
    query.city as string
  );

  if (isLoading) console.log("Loading");
  if (isError) console.log("Error");

  console.log(weather);

  return (
    <div>
      <h1>{query.city}</h1>
    </div>
  );
}
