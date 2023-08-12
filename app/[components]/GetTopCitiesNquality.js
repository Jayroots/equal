"use client";

import { useState, useEffect } from "react";
import CardTopCitiesNquality from "./CardTopCitiesNquality";

const GetTopCitiesNquality = () => {
  const [data, setData] = useState([]);

  const construireData = (dataFetched) => {
    console.log("construire data");
    setData(
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
    console.log("DATA", data);
  }, [data]);

  return (
    <>
      <ul className="flex flex-wrap max-w-full w-3/4 mx-auto ">
        {data.map((el) => {
          return (
            <CardTopCitiesNquality
              key={el.codeCommune}
              id={el.codeCommune}
              nom_commune={el.nomCommune}
              nom_departement={el.nomDepartement}
            />
          );
        })}
      </ul>
    </>
  );
};

export default GetTopCitiesNquality;
