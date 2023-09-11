import TopConformeVilles from "./(components)/TopConformeVilles";
import TopDepartement from "./(components)/TopDepartement";
import TopNvilles from "./(components)/TopNvilles";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{ backgroundImage: "url('/fond-texture-eau.jpg')" }}
      className="bg-cover bg-center h-screen"
    >
      <section className="flex flex-wrap p-6  md:justify-around md:items-center ">
        <div className="md:w-2/5">
          <Image
            className=" "
            width={6331}
            height={4297}
            src="/gif-eau.png"
            alt="gif eau robinet geant"
          />
        </div>

        <div className="  opacity-90  bg-sky-400 rounded-lg shadow-md  text-white p-5 md:w-2/5 md:h-1/2">
          <h2 className="text-3xl text-center ">
            Bienvenue sur E Qual, le site national analysant la qualité de
            l&apos;eau de votre ville !
          </h2>
          <br />
          <p>
            Par un simple clic, retrouvez les résultats de la conformité des
            prélèvements sur les dernières années.
          </p>
        </div>
      </section>

      <TopConformeVilles />
      <TopNvilles />
      <TopDepartement />
    </main>
  );
}
