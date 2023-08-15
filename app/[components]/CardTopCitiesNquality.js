import React from "react";
import Link from "next/link";

const CardTopCitiesNquality = ({ id, nom_commune, nom_departement }) => {
  return (
    <Link href={`/resultats/${id}`}>
      <li className=" border-2 rounded-xl shadow-sm p-5 text-white bg-sky-300 m-5 ">
        <p className="p-5 text-center text-2xl font-semibold">
          Ville :{nom_commune}
        </p>
        <p className="p-5 text-center text-2xl">
          Departement :{nom_departement}
        </p>
      </li>
    </Link>
  );
};

export default CardTopCitiesNquality;
