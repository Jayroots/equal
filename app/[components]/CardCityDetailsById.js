"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function CardCityDetailsById({ id: codeCommune }) {
  const [commune, setCommune] = useState();

  const construireData = (dataFetched) => {
    setCommune({
      codeCommune: dataFetched.code_commune,
      nomCommune: dataFetched.nom_commune,
      nomDepartement: dataFetched.nom_departement,
      parametre: dataFetched.libelle_parametre,
      bact_prelevement: dataFetched.conformite_limites_bact_prelevement,
      pc_prelevement: dataFetched.conformite_limites_pc_prelevement,
    });
  };

  useEffect(() => {
    fetch(
      `https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?code_commune=${codeCommune}&size=5`
    )
      .then((response) => response.json())
      .then((res) => construireData(res.data[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <ul className="flex  w-1/2 mx-auto border-2 rounded-xl shadow-sm p-5 text-white bg-sky-300 m-5 ">
        {commune !== undefined && (
          <li className="flex  ">
            <div className="w-1/2">
              <li>Ville : {commune.nomCommune}</li>
              <li>Département : {commune.nomDepartement}</li>
              <li>
                conformite_limites_bact_prelevement : {commune.bact_prelevement}
              </li>
              <li>
                conformite_limites_pc_prelevement : {commune.pc_prelevement}
              </li>
              <li>Description </li>

              <li>Parametre 1 analysé : {commune.parametre}</li>
              <p>Parametre 2 analysé : </p>
              <p>Parametre 3</p>
              <p>Parametre 4</p>
              <p>Parametre 5</p>
            </div>
            <div>
              <Image
                className="h-1/2 w-full border-2 rounded-xl shadow-sm "
                width={5396}
                height={3597}
                src="/fond-texture-eau.jpg"
                alt="image d acceuil E qual"
              />
            </div>
          </li>
        )}
      </ul>
      <div>
        <p>5 cards avec la dernière valeur ? </p>
        <p>
          GRAPHIQUE ? Une section par polluant, utilisation d’une tab ,les 5,
          line chart par polluant, utiliser D3 https://d3js.org/ mettre un seuil
          de limite, voir si tu le récupère facilement, sinon tu peux en mettre
          un arbitraire par polluant- Champs info à mettre en full texte
        </p>
        <p>Lister les réseaux de la commune /passer par un tableau/</p>
      </div>
    </>
  );
}

export default CardCityDetailsById;
