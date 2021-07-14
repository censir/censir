// @ts-expect-error Types :(
import { useIpCoords } from "use-ipcoords";
import { useGetPill } from "../utils/useGetPill";

export const Pill = (): JSX.Element => {
  const { latitudeIp: lat, longitudeIp: lon } = useIpCoords();

  const { weather, isLoading, isError } = useGetPill(lat, lon);

  if (isLoading) console.log("loading");
  if (isError) console.log("loading");

  return (
    <div>
      {isError ? (
        <h1>An error occurred!</h1>
      ) : !isLoading && weather ? (
        <span>{weather.main.temp}</span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
