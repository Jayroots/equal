"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Localisation = () => {
  const [userLocation, setUserLocation] = useState(null);

  const router = useRouter();

  const handleClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://wxs.ign.fr/essentiels/geoportail/geocodage/rest/0.1/reverse?lon=${longitude}&lat=${latitude}&limit=1`
          )
            .then((res) => res.json())
            .then((response) =>
              router.push(
                "/resultats/" + response.features[0].properties.citycode
              )
            );
        },
        (error) => {
          console.error(error.message);
        }
      );
    } else {
      console.error("Geolocation is not available");
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="animate-bounce bg-sky-300 p-2 text-white rounded-lg  hover:bg-sky-200"
      >
        Localisez-moi !
      </button>
    </>
  );
};

export default Localisation;
