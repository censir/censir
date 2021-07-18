import { useEffect, useState } from "react";
import { GetCoordsRes } from "@/types/types";

export const GetCoords = (): GetCoordsRes => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    const getLocationViaIp = () => {
      fetch("https://get.geojs.io/v1/ip/geo.json")
        .then((res) => res.json())
        .then((location) => {
          setLatitude(location.latitude);
          setLongitude(location.longitude);
        });
    };
    navigator.permissions.query({ name: "geolocation" }).then(({ state }) => {
      if (state === "denied") return getLocationViaIp();

      // If prompted, don't return because we want to ask for permission
      if (state === "prompt") getLocationViaIp();

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLatitude(pos.coords.latitude);
          setLongitude(pos.coords.longitude);
        },

        // if they deny or another error occurs, get location via IP
        () => getLocationViaIp()
      );
    });
  }, []);

  return { latitude, longitude };
};
