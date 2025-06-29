import React from "react";

const Hero = () => {
  return (
    <div className=" border-b-2  flex ">
      <div className="max-w-4xl p-20 mx-auto text-left flex flex-col justify-center">
        <h2 className="text-6xl font-bold mb-6">
          Découvrez notre collection exclusive
        </h2>
        <p className="text-xl mb-8">
          Explorez une sélection unique de produits conçus pour vous inspirer et
          vous accompagner dans vos projets créatifs.
        </p>
        <button className="bg-black w-fit text-white px-8 py-3 border-2  hover:bg-white hover:text-black transition-all duration-200 ease-in-out shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
          Explorer maintenant
        </button>
      </div>
      <div className="h-[500px]">
        <img
          src="/wpgroup.jpg"
          alt="hero"
          className="w-full h-full object-cover border-l-2"
        />
      </div>
    </div>
  );
};

export default Hero;
