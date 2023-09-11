"use client";

const TopDepartementCard = ({ nom_departement, code_departement }) => {
  return (
    <li className=" border-2 border-sky-300 rounded-xl shadow-sm p-5 text-sky-300 bg-white/70 m-5 hover:scale-105 ">
      <h3>{code_departement} </h3>
      <h4 className="p-5 text-center text-2xl">{nom_departement}</h4>
    </li>
  );
};

export default TopDepartementCard;
