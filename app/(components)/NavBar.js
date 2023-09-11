"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className=" p-4">
      <div className="max-w-screen-lg mx-auto">
        <button
          className="lg:hidden block  hover:scale-125"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image
            className="w-9"
            width={512}
            height={512}
            src="/menu.png"
            alt="Menu de navigation"
          />
        </button>

        <ul
          className={`${
            isMenuOpen
              ? "text-left block fixed top-35 right-0  p-8 bg-white"
              : "hidden"
          } lg:flex lg:flex-row `}
        >
          <li className="px-2 rounded-lg hover:bg-sky-300 hover:text-white hover:scale-105">
            <Link href="/" onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li className="px-2 rounded-lg hover:bg-sky-300 hover:text-white hover:scale-105">
            <Link href="/resultats" onClick={closeMenu}>
              Recherche par ville
            </Link>
          </li>

          <li className="px-2 rounded-lg hover:bg-sky-300 hover:text-white hover:scale-105">
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
