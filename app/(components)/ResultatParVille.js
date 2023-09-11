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
    parametres: dataFetched.map((d) => d.libelle_parametre),
    bact_prelevement: dataFetched[0].conformite_limites_bact_prelevement,
    pc_prelevement: dataFetched[0].conformite_limites_pc_prelevement,
    description: dataFetched[0].conclusion_conformite_prelevement,
    reseaux: dataFetched[0].reseaux,
  };
};

const codesParametres = [1337, 1338, 1339, 1340, 1310];

let fetchDatasPolluants = async (codeCommune) => {
  let response = await fetch(
    `https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?code_commune=${codeCommune}&code_parametre=1337,1338,1339,1340,1310&size=50`,
    { next: { revalidate: 3600 } }
  );

  let datas = await response.json();

  let finalData = construireDataPolluants(datas.data);

  return finalData;
};

const construireDataPolluantsParametre = (codeParametre, dataFetched) => {
  const dataPourParametre = dataFetched.filter(
    (d) => d.code_parametre == codeParametre
  );

  return {
    codeParametre,
    commune: dataPourParametre[0]?.nom_commune,
    departement: dataPourParametre[0]?.nom_departement,
    parametre: dataPourParametre[0]?.libelle_parametre,
    unite: dataPourParametre[0]?.libelle_unite,
    limite_qualite_parametre: dataPourParametre[0]?.limite_qualite_parametre,

    data: dataPourParametre.map((el) => ({
      valeur: el.resultat_numerique,
      date: el.date_prelevement.split("T")[0],
    })),
  };
};

const construireDataPolluants = (dataFetched) => {
  if (dataFetched && dataFetched.length > 0) {
    return codesParametres.map((codeParametre) =>
      construireDataPolluantsParametre(codeParametre, dataFetched)
    );
  }

  return [];
};

async function ResultatParVille({ id: codeCommune }) {
  let commune = await fetchDatas(codeCommune);
  let dataPolluants = await fetchDatasPolluants(codeCommune);

  return (
    <>
      <ul className=" flex w-4/5 mx-auto justify-center border-2 rounded-xl shadow-sm p-5 text-white bg-sky-300 m-5 lg:w-2/5 ">
        {commune !== undefined && (
          <div className="flex flex-col	 ">
            <div className="text-center p-4 lg:text-left">
              <li className="text-3xl">Ville : {commune.nomCommune}</li>
              <li>Département : {commune.nomDepartement}</li>
              <br />

              <li>Prélèvement bactérien : {commune.bact_prelevement}</li>
              <li>Prélèvement pc : {commune.pc_prelevement}</li>
              <li>(N= Non Conforme, C = Conforme)</li>
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
        <Polluants
          codeCommune={codeCommune}
          dataPolluants={dataPolluants.find((d) => d.codeParametre === 1337)}
        />
        <Polluants
          codeCommune={codeCommune}
          dataPolluants={dataPolluants.find((d) => d.codeParametre === 1338)}
        />
        <Polluants
          codeCommune={codeCommune}
          dataPolluants={dataPolluants.find((d) => d.codeParametre === 1339)}
        />
        <Polluants
          codeCommune={codeCommune}
          dataPolluants={dataPolluants.find((d) => d.codeParametre === 1340)}
        />
        <Polluants
          codeCommune={codeCommune}
          dataPolluants={dataPolluants.find((d) => d.codeParametre === 1310)}
        />
      </div>

      <div className=" flex justify-center m-6">
        <Reseaux codeCommune={codeCommune} reseaux={commune.reseaux} />
      </div>
    </>
  );
}

export default ResultatParVille;
