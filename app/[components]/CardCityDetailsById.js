"use client";

import { useState, useEffect } from "react";

function CardCityDetailsById({ id: codeCommune }) {
  const [commune, setCommune] = useState();

  console.log("ceci est l id", codeCommune);

  const construireData = (dataFetched) => {
    setCommune({
      codeCommune: dataFetched.code_commune,
      nomCommune: dataFetched.nom_commune,
      nomDepartement: dataFetched.nom_departement,
    });
  };

  useEffect(() => {
    fetch(
      `https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?code_commune=${codeCommune}&size=1`
    )
      .then((response) => response.json())
      .then((res) => construireData(res.data[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul className="">
      {commune !== undefined && (
        <li className="">
          <img />
          <p>Ville : {commune.nomCommune}</p>
          <p>Département : {commune.nomDepartement}</p>
          <p>
            conformite_limites_bact_prelevement{" "}
            {commune.conformite_limites_bact_prelevement}
          </p>
          <p>
            conformite_limites_pc_prelevement{" "}
            {commune.conformite_limites_pc_prelevement}
          </p>
          <p>Description </p>
          <p>Parametre 1</p>
          <p>Parametre 2</p>
          <p>Parametre 3</p>
          <p>Parametre 4</p>
          <p>Parametre 5</p>
          <br />
          <p>5 cards avec la dernière valeur ? </p>
          <p>
            GRAPHIQUE ? Une section par polluant, utilisation d’une tab ,les 5,
            line chart par polluant, utiliser D3 https://d3js.org/ mettre un
            seuil de limite, voir si tu le récupère facilement, sinon tu peux en
            mettre un arbitraire par polluant- Champs info à mettre en full
            texte
          </p>
          <p>Lister les réseaux de la commune /passer par un tableau/</p>
        </li>
      )}
    </ul>
  );
}

export default CardCityDetailsById;
