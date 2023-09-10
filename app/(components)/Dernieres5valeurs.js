"use client";

import { useState, useEffect } from "react";

const Dernieres5valeurs = ({ codeCommune }) => {
  const [valeurs, setValeurs] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?code_commune=${codeCommune}&size=5`
      )
        .then((response) => response.json())
        .then((res) => setValeurs(res.data))
        .catch(() => console.error(err));
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center p-4 lg:w-3/5 lg:mx-auto">
      {valeurs !== undefined ? (
        valeurs.map((el) => (
          <div
            className="p-5"
            key={`${el.codeCommune}-${el.libelle_parametre}`}
          >
            <ul
              key={`${el.codeCommune}-${el.libelle_parametre}`}
              className=" border-2 rounded-xl shadow-sm p-5"
            >
              <li>Parametre : {el.libelle_parametre}</li>
              <li>Date du prélèvement : {el.date_prelevement.split("T")[0]}</li>
              <li>
                Résultat : {el.resultat_alphanumerique} {el.libelle_unite}
              </li>
              {el.reference_qualite_parametre && (
                <li>Référence qualité : {el.reference_qualite_parametre}</li>
              )}
            </ul>
          </div>
        ))
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default Dernieres5valeurs;
