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
        {reseaux.map((el) => {
          return (
            <>
              <tbody>
                <tr>
                  <td className=" bg-blue-100 border-separate " key={el.nom}>
                    {el.nom}
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Reseaux;
