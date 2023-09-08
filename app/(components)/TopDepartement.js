"use client";
import { useState, useEffect } from "react";
import TopDepartementCard from "./TopDepartementCard";

const TopDepartement = () => {
  const [communesN, setCommunesN] = useState([]);
  const [menuOuvert, setMenuOuvert] = useState(false);

  const handleClick = () => {
    setMenuOuvert(!menuOuvert);
  };

  const construireData = (dataFetched) => {
    console.log("construire data departement");
    setCommunesN(
      dataFetched
        .map((d) => ({
          codeDepartement: d.code_departement,
          nomDepartement: d.nom_departement,
        }))
        .reduce(
          (agregation, courant) =>
            !agregation.find(
              (el) => el.nomDepartement === courant.nomDepartement
            )
              ? [...agregation, courant]
              : agregation,
          []
        )
    );
    console.log("construire data departement fin");
  };

  useEffect(() => {
    fetch(
      "https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?conformite_limites_bact_prelevement=C&conformite_limites_pc_prelevement=C&conformite_references_bact_prelevement=C&conformite_references_pc_prelevement=C&date_max_prelevement=2022-12-31%2023%3A59%3A59&date_min_prelevement=2022-01-01%2000%3A00%3A01&fields=code_departement%2Cnom_departement&size=1000&sort=desc"
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
      className="bg-slate-100 p-5 text-center"
    >
      <button
        onClick={handleClick}
        className="text-white font-semibold text-center text-1xl w-4/5 lg:w-1/3 mx-auto border-2 rounded-xl shadow-sm p-5 bg-sky-300 m-5 hover:scale-105 "
      >
        Top des departements pour la conformité en 2022{" "}
        <p className="text-sm font-extralight p-2">
          Cliquez pour voir les résultats
        </p>
      </button>

      {menuOuvert && (
        <ul className="flex flex-wrap justify-center max-w-full w-4/5 mx-auto ">
          {communesN.map((el) => {
            return (
              <TopDepartementCard
                key={el.nomDepartement}
                id={el.nomDepartement}
                nom_departement={el.nomDepartement}
                code_departement={el.codeDepartement}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TopDepartement;
