"use client";

import { useState } from "react";
import TopNvillesCard from "./TopNvillesCard";
import Loading from "../resultats/[id]/loading";

const TopNvilles = () => {
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
      "https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?conformite_limites_bact_prelevement=N&conformite_limites_pc_prelevement=N"
    )
      .then((response) => response.json())
      .then((res) => construireData(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <section
      /*  style={{ backgroundImage: "url('/goutte.jpg')" }}*/
      className="bg-slate-100 p-5 text-center"
    >
      <button
        onClick={handleClick}
        className="text-white font-semibold text-center text-1xl w-4/5 lg:w-1/3 mx-auto border-2 rounded-xl shadow-sm p-5 bg-orange-400 m-5 hover:scale-105 animate-pulse"
      >
        Top des communes où la qualités est non conforme (N)
        <p className="text-sm font-extralight p-2">
          Cliquez pour voir les résultats
        </p>
      </button>
      {fetchEnCours && (
        <div className="">
          <Loading />
        </div>
      )}
      {menuOuvert && (
        <ul className="flex flex-wrap justify-center w-4/5 lg:w-11/12 mx-auto ">
          {communesN.map((el) => {
            return (
              <TopNvillesCard
                key={el.codeCommune}
                id={el.codeCommune}
                nom_commune={el.nomCommune}
                nom_departement={el.nomDepartement}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default TopNvilles;
