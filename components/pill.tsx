import { GetCoords } from "@/utils/getCoords";
import { useGetPill } from "@/utils/useGetPill";

export const Pill = (): JSX.Element => {
  const { latitude: lat, longitude: lon } = GetCoords();
  const { weather, isLoading, isError } = useGetPill(lat, lon);

  if (isLoading) console.log("loading");

  return (
    <div>
      {isError ? (
        <h1>An error occurred!</h1>
      ) : !isLoading && weather ? (
        <span>{weather.cod}</span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
