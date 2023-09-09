/* "use client";

import { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { useRouter } from "next/navigation";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

const Places = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDsTW2oRj3VCk_Rk6XUnr3ZOY1q79ieaAE",
    libraries: ["places"],
  });

  if (!isLoaded) return <div> Loading ... </div>;

  return <Map />;
};

function Map() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="flex justify-center p-6">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const router = useRouter();
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    fetch(
      `https://wxs.ign.fr/essentiels/geoportail/geocodage/rest/0.1/reverse?lon=${lng}&lat=${lat}&limit=1`
    )
      .then((res) => res.json())
      .then((response) =>
        router.push("/resultats/" + response.features[0].properties.citycode)
      );
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input p-4 border-2 rounded-md"
        placeholder="Rechercher une ville"
      />
      <ComboboxPopover>
        <ComboboxList className="bg-white">
          {status === "OK" &&
            data
              .map(({ place_id, description }) => (
                <ComboboxOption
                  key={place_id}
                  value={description.split(",")[0].split(" ")[0]}
                />
              ))
              .reduce(
                (agregation, courant) =>
                  !agregation.find(
                    (el) => el.description === courant.description
                  )
                    ? [...agregation, courant]
                    : agregation,
                []
              )}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default Places;
 */
