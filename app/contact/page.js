import FormulaireContact from "../(components)/FormulaireContact";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex flex-wrap p-6  md:justify-around md:items-center  ">
      <section className="md:w-2/5 p-6">
        <Image
          className=""
          width={6331}
          height={4297}
          src="/gif-eau.png"
          alt="gif eau robinet geant"
        />
      </section>

      <FormulaireContact />
    </main>
  );
}
