"use client";

import { useState, useEffect } from "react";
import TopNvillesCard from "./TopNvillesCard";

const GetTopCitiesNquality = () => {
  const [communesN, setCommunesN] = useState([]);

  const construireData = (dataFetched) => {
    console.log("construire data");
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
    console.log("construire data fin");
  };

  useEffect(() => {
    fetch(
      "https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?conformite_limites_bact_prelevement=N&conformite_limites_pc_prelevement=N"
    )
      .then((response) => response.json())
      .then((res) => construireData(res.data))
      .catch(() => console.error(err));
  }, []);

  useEffect(() => {
    console.log("DATA", communesN);
  }, [communesN]);

  return (
    <div
      /*  style={{ backgroundImage: "url('/goutte.jpg')" }}*/
      className="bg-slate-100 p-5"
    >
      <h2 className="text-white font-semibold text-center text-1xl w-1/3 mx-auto border-2 rounded-xl shadow-sm p-5 bg-sky-300 m-5 ">
        Top des communes qualités N{" "}
      </h2>
      <ul className="flex flex-wrap justify-center max-w-full w-4/5 mx-auto ">
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
    </div>
  );
};

export default GetTopCitiesNquality;
