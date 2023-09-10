"use client";

import { useState, useEffect } from "react";
import TopConformeVillesCard from "./TopConformeVillesCard";

const TopConformeVilles = () => {
  const [communesN, setCommunesN] = useState();
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [fetchEnCours, setFetchEnCours] = useState(false);

  const handleClick = () => {
    if (!communesN) {
      lancerFetch();
    } else {
      setMenuOuvert(!menuOuvert);
    }
  };

  const construireData = (dataFetched) => {
    setFetchEnCours(false);
    setMenuOuvert(true);
    setCommunesN(
      dataFetched
        .map((d) => ({
          codeCommune: d.code_commune,
          nomCommune: d.nom_commune,
          nomDepartement: d.nom_departement,
        }))
        .reduce(
          (agregation, courant) =>
            !agregation.find((el) => el.codeCommune === courant.codeCommune)
              ? [...agregation, courant]
              : agregation,
          []
        )
    );
  };

  const lancerFetch = () => {
    setFetchEnCours(true);
    fetch(
      "https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?conformite_limites_bact_prelevement=C&conformite_limites_pc_prelevement=C&conformite_references_bact_prelevement=C&conformite_references_pc_prelevement=C&date_max_prelevement=2022-12-31%2023%3A59%3A59&date_min_prelevement=2022-12-01%2000%3A00%3A01&size=100"
    )
      .then((response) => response.json())
      .then((res) => construireData(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div
      /*  style={{ backgroundImage: "url('/goutte.jpg')" }}*/
      className="bg-slate-100 p-5 text-center "
    >
      <button
        onClick={handleClick}
        className="text-white font-semibold text-center text-1xl w-4/5 lg:w-1/3 mx-auto border-2 rounded-xl shadow-sm p-5 bg-sky-300 m-5 hover:scale-105 animate-pulse"
      >
        Top des communes où la qualité est conforme (C) fin 2022
        <p className="text-sm font-extralight p-2">
          Cliquez pour voir les résultats
        </p>
      </button>
      {fetchEnCours && <div>Chargement en cours...</div>}
      {menuOuvert && (
        <ul className="flex flex-wrap justify-center w-4/5 lg:w-11/12 mx-auto ">
          {communesN.map((el) => {
            return (
              <TopConformeVillesCard
                key={el.codeCommune}
                id={el.codeCommune}
                nom_commune={el.nomCommune}
                nom_departement={el.nomDepartement}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TopConformeVilles;
