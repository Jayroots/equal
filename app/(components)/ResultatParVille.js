import Polluants from "./Polluants";
import Reseaux from "./Reseaux";
import Dernieres5valeurs from "./Dernieres5valeurs";

let fetchDatas = async (codeCommune) => {
  let response = await fetch(
    `https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?code_commune=${codeCommune}&size=5`,
    { next: { revalidate: 3600 } }
  );

  let datas = await response.json();

  let finalData = construireData(datas.data);

  return finalData;
};

const construireData = (dataFetched) => {
  return {
    codeCommune: dataFetched[0]?.code_commune,
    nomCommune: dataFetched[0].nom_commune,
    nomDepartement: dataFetched[0].nom_departement,
    parametres: dataFetched.libelle_parametre,
    bact_prelevement: dataFetched[0].conformite_limites_bact_prelevement,
    pc_prelevement: dataFetched[0].conformite_limites_pc_prelevement,
    description: dataFetched[0].conclusion_conformite_prelevement,
    reseaux: dataFetched[0].reseaux,
  };
};

async function ResultatParVille({ id: codeCommune }) {
  let commune = await fetchDatas(codeCommune);

  return (
    <>
      <ul className=" flex w-4/5 mx-auto justify-center border-2 rounded-xl shadow-sm p-5 text-white bg-sky-300 m-5 lg:w-2/5 ">
        {commune !== undefined && (
          <div className="flex flex-col	 ">
            <div className="text-center p-4 lg:text-left">
              <li className="text-3xl">Ville : {commune.nomCommune}</li>
              <li>Département : {commune.nomDepartement}</li>
              <br />

              <li>
                Prélèvement bactérien (N= Non Conforme, C = Conforme) :{" "}
                {commune.bact_prelevement}
              </li>
              <li>
                Prélèvement pc (N= Non Conforme, C = Conforme) :{" "}
                {commune.pc_prelevement}
              </li>
              <br />
              <li>
                <b>Description :</b>
                <br />
                {commune.description}
              </li>
              <li>{commune.parametres}</li>
            </div>
          </div>
        )}
      </ul>
      <Dernieres5valeurs codeCommune={codeCommune} />
      <div className=" flex flex-wrap p-10 justify-center">
        <Polluants codeCommune={codeCommune} codeParametre={1337} />
        <Polluants codeCommune={codeCommune} codeParametre={1338} />
        <Polluants codeCommune={codeCommune} codeParametre={1339} />
        <Polluants codeCommune={codeCommune} codeParametre={1340} />
        <Polluants codeCommune={codeCommune} codeParametre={1310} />
      </div>

      <div className=" flex justify-center m-6">
        <Reseaux codeCommune={codeCommune} reseaux={commune.reseaux} />
      </div>
    </>
  );
}

export default ResultatParVille;
