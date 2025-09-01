import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className="h-64 md:h-80 lg:h-96 m-2 md:m-6 rounded-2xl bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat flex items-center">
        <div className="max-w-xs sm:max-w-md md:max-w-2xl ml-4 md:ml-10 lg:ml-20 space-y-3 md:space-y-6 p-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
            Découvrez l&apos;univers de la bière artisanale
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
            Explorez notre sélection exclusive de bières locales et
            internationales. Trouvez la saveur parfaite pour chaque occasion et
            vivez une expérience brassicole unique.
          </p>
          <Link href="/catalogue">
            <Button className="bg-white hover:bg-white/90 text-black px-4 md:px-8 py-3 md:py-6 text-sm md:text-lg">
              Découvrir le catalogue
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
