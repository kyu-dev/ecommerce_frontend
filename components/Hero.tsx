// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className="h-180 m-6 rounded-2xl bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat flex items-center">
        <div className="max-w-2xl ml-20 space-y-6">
          <h1 className="text-6xl font-bold text-white">
            Découvrez l'âme du vinyle
          </h1>
          <p className="text-xl text-white">
            Plongez dans notre collection exclusive de vinyles rares et
            intemporels. Redécouvrez le son authentique qui a marqué des
            générations.
          </p>
          <Link href="/collection">
            <Button className="bg-white hover:bg-white/90 text-black px-8 py-6 text-lg">
              Explorer la collection
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
