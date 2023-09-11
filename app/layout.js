import Localisation from "./(components)/Localisation";
import LottieAnimation from "./(components)/LottieAnimation";

import NavBar from "./(components)/NavBar";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "E Qual, service pour la qualité de l'eau en France",
  description: "E Qual, service pour la qualité de l'eau en France",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="fr">
      <body className="">
        <header className="flex flex-row justify-between py-10 w-full ">
          <section className="flex flex-row px-5">
            <div className="w-12 flex items-center">
              <LottieAnimation />
            </div>

            <Link className="flex items-center" href="/">
              <h1
                style={{
                  fontFamily: "Ysabeau, sans-serif",
                }}
                className=" text-2xl md:text-4xl px-2 font-semibold hover:scale-125 md:px-5 "
              >
                E Qual
              </h1>
            </Link>
          </section>

          <Localisation />

          <NavBar />
        </header>

        {children}
      </body>
    </html>
  );
}
