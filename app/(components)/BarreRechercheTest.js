"use client";

import { useState } from "react";
import jsonData from "../resultats/codes_postaux.json";
import { useRouter } from "next/navigation";

const BarreRechercheTest = () => {
  const [value, setValue] = useState("");
  const [listeOuverte, setListeOuverte] = useState(true);
  const [selectedCodeCommune, setSelectedCodeCommune] = useState(""); // Stocke le code de commune sélectionné
  const router = useRouter();

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleClick() {
    if (selectedCodeCommune) {
      router.push(`/resultats/${selectedCodeCommune}`);
    }
  }

  function handleListItemClick(codeCommune, nomCommune) {
    setSelectedCodeCommune(codeCommune); // Met à jour le code de commune sélectionné
    setListeOuverte(false); // Cache la liste après la sélection
    setValue(nomCommune); // Efface la valeur de l'input
  }

  return (
    <div className="flex flex-col p-6">
      <div>
        <input
          className="border-2 rounded-md p-2"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Rechercher une ville"
        />
        <button
          onClick={handleClick}
          className="bg-sky-400 text-white p-2 rounded-md m-2  hover:bg-sky-300"
        >
          Rechercher
        </button>
        <ul className="bg-white p-2">
          {value &&
            listeOuverte &&
            jsonData
              .filter((el) => el.nomCommune.includes(value))
              .map((element, index) => (
                <li
                  onClick={() =>
                    handleListItemClick(element.codeCommune, element.nomCommune)
                  } // Utilisez le codeCommune comme argument
                  key={index}
                  id={element.codeCommune}
                >
                  {element.nomCommune}
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};
export default BarreRechercheTest;
