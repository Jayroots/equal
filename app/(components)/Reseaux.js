"use client";

const Reseaux = ({ reseaux }) => {
  return (
    <div>
      <table className="table-auto border-separate border border-blue-300">
        <thead>
          <tr>
            <th>Liste des réseaux rattachés à la commune </th>
          </tr>
        </thead>
        <tbody>
          {reseaux.map((el) => {
            return (
              <tr key={el.nom}>
                <td className=" bg-blue-100 border-separate ">{el.nom}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Reseaux;
