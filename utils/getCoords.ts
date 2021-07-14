import { useEffect, useState } from "react";
import { GetCoordsRes } from "@/types/types";

export const GetCoords = (): GetCoordsRes => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://get.geojs.io/v1/ip/geo.json")
      .then((res) => res.json())
      .then((location) => {
        setLatitude(location.latitude);
        setLongitude(location.longitude);
      });
  }, []);

  return { latitude, longitude };
};
