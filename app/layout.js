import Localisation from "./(components)/Localisation";
import LottieAnimation from "./(components)/LottieAnimation";
import NavBar from "./(components)/NavBar";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "E Qual, service pour la qualité de l eau en France",
  description: "E Qual, service pour la qualité de l eau en France",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="fr">
      <body>
        <header className="flex flex-row justify-between py-10 w-full ">
          <section className="flex flex-row px-5">
            <div className="w-12">
              <LottieAnimation />
            </div>
            {/* <img className="w-9" src="/goutte.jpg" alt="logo E Qual"></img> */}
            <Link href="/">
              {" "}
              <h1
                className=" text-4xl px-5 font-semibold hover:scale-125"
                style={{ fontFamily: "Ysabeau Office, sans-serif" }}
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
