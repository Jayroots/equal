"use client";

import Link from "next/link";

const TopConformeVillesCard = ({ id, nom_commune, nom_departement }) => {
  return (
    <Link href={`/resultats/${id}`}>
      <li className=" border-2 border-sky-300 rounded-xl shadow-sm p-5 text-sky-300 bg-white/70 m-5 hover:scale-105 ">
        <h3 className="p-5 text-center text-2xl font-semibold">
          {nom_commune}
        </h3>
        <h4 className="p-5 text-center text-2xl">
          Departement : {nom_departement}
        </h4>
        <p className="text-sm font-extralight p-2">
          Cliquez pour voir les résultats
        </p>
      </li>
    </Link>
  );
};

export default TopConformeVillesCard;
