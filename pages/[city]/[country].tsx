import { useRouter } from "next/router";
import { Logo } from "../../components";
import { useGetWeatherByCity } from "../../utils/useGetWeatherByCity";

export default function Country(): JSX.Element {
  const { query } = useRouter();

  const { weather, isError, isLoading } = useGetWeatherByCity(
    query.city as string
  );

  if (isLoading) console.log("Loading");

  return (
    <div>
      <Logo />
      <br />
      {isError ? (
        <h1>An error occurred!</h1>
      ) : !isLoading && weather ? (
        <span>{weather.city.name}</span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}
