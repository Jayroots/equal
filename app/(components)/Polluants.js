"use client";

import { useState, useEffect } from "react";
import Tableau from "./Tableau";

const Polluants = ({ codeCommune, codeParametre }) => {
  const [dataPolluants, setDataPolluants] = useState([]);
  const [commune, setCommune] = useState("");
  const [departement, setDepartement] = useState("");
  const [parametre, setParametre] = useState("");
  const [unite, setUnite] = useState("");
  const [loading, setLoading] = useState(true);

  const construireData = (dataFetched) => {
    if (dataFetched && dataFetched.length > 0) {
      setCommune(dataFetched[0]?.nom_commune);
      setDepartement(dataFetched[0]?.nom_departement);
      setParametre(dataFetched[0]?.libelle_parametre);
      setUnite(dataFetched[0]?.libelle_unite);

      const tmp = dataFetched.map((el) => {
        return {
          valeur: el.resultat_numerique,
          date: el.date_prelevement.split("T")[0],
        };
      });

      setDataPolluants(tmp);
    }
    setLoading(false);
  };

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?code_commune=${codeCommune}&code_parametre=${codeParametre}&size=50`
    )
      .then((response) => response.json())
      .then((res) => construireData(res.data))
      .catch((err) => {
        fetchData();
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      {!loading ? (
        dataPolluants.length > 0 && (
          <>
            <p>
              {parametre} en {unite}
            </p>
            <Tableau data={dataPolluants} />
          </>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Polluants;
