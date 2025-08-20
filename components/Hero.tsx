import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className="h-180 m-6 rounded-2xl bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat flex items-center">
        <div className="max-w-2xl ml-20 space-y-6">
          <h1 className="text-6xl font-bold text-white">
            Découvrez l&apos;univers de la bière artisanale
          </h1>
          <p className="text-xl text-white">
            Explorez notre sélection exclusive de bières locales et
            internationales. Trouvez la saveur parfaite pour chaque occasion et
            vivez une expérience brassicole unique.
          </p>
          <Link href="/catalogue">
            <Button className="bg-white hover:bg-white/90 text-black px-8 py-6 text-lg">
              Découvrir le catalogue
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
