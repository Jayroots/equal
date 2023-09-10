import BarreRecherche from "../(components)/BarreRecherche";

export default function Resultats() {
  return (
    <main
      style={{ backgroundImage: "url('/fond-texture-eau.jpg')" }}
      className="bg-cover bg-center h-screen flex items-center flex-col"
    >
      <BarreRecherche />

      <div className="opacity-90  bg-sky-400 rounded-lg shadow-md hover:bg-sky-300 text-white p-5 md:w-2/5  ">
        {/*  absolute top-10 right-10 */}
        <p className="text-3xl text-center ">
          En sélectionnant votre ville, vous pourrez observer différentes
          analyses sur la qualité de l&apos;eau
        </p>
        <br />
        <p>Voici les détails que vous obtiendrez si la donnée est présente :</p>
        <br />
        <ul>
          <li>Prélèvement bactérien (N= Non Conforme, C = Conforme)</li>
          <li>Prélèvement pc (N= Non Conforme, C = Conforme)</li>
          <li>
            {" "}
            Description : conclusion sur les exigences de qualité en vigueur
            pour l&apos;ensemble des paramètres mesurés.
          </li>
          <li>Résultats des 5 derniers prélèvements </li>
          <li>Analyse sur les 2 dernières années des prélèvements de :</li>
          <br />
          <li className="font-semibold  text-center">Chlorure</li>
          <li className="font-semibold  text-center">Sulfates</li>
          <li className="font-semibold  text-center">Nitrites</li>
          <li className="font-semibold  text-center">Nitrates</li>
          <li className="font-semibold  text-center">Acrinathrine</li>
        </ul>
      </div>
    </main>
  );
}
