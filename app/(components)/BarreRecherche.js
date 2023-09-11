"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import codePostauxReduits from "../(donnees)/codePostauxReduits";

const BarreRecherche = () => {
  const [value, setValue] = useState("");
  const [listeOuverte, setListeOuverte] = useState(true);
  const [selectedCodeCommune, setSelectedCodeCommune] = useState("");
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
    setSelectedCodeCommune(codeCommune);
    setListeOuverte(false);
    setValue(nomCommune);
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
            codePostauxReduits

              .filter((el) =>
                el.nomCommune.toLowerCase().includes(value.toLowerCase())
              )

              .map((element, index) => (
                <li
                  className="hover:cursor-pointer"
                  onClick={() =>
                    handleListItemClick(element.codeCommune, element.nomCommune)
                  }
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
export default BarreRecherche;
