"use client";

import { useState } from "react";
import Tableau from "./Tableau";

const Polluants = ({ dataPolluants }) => {
  const [loading] = useState(false);

  return (
    <div className="">
      {!loading ? (
        dataPolluants &&
        dataPolluants.data.length > 0 && (
          <>
            <p>
              {dataPolluants.parametre} en {dataPolluants.unite}
            </p>
            <Tableau data={dataPolluants.data} />
            <br />
            {dataPolluants.limite_qualite_parametre && (
              <>
                {" "}
                <p className="text-center">
                  Référence qualité: {dataPolluants.limite_qualite_parametre}
                </p>
                <br />
              </>
            )}
          </>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Polluants;
