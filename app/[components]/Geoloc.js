'use client'

import { useEffect, useState } from 'react';

function Geoloc() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        error => {
          console.error(error.message);
        }
      );
    } else {
      console.error("Geolocation is not available");
    }
  }, []);

  return (
    <div>
      <h1>Géolocalisation</h1>
      {userLocation && (
        <p>
          Votre position : {userLocation.latitude}, {userLocation.longitude}
        </p>
      )}
    </div>
  );
}

export default Geoloc;
