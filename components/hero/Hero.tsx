import React from "react";

const Hero = () => {
  return (
    <div className=" border-b-2 bg-red-400 h-180 flex ">
      <div className="max-w-4xl p-20 mx-auto text-left flex flex-col justify-center">
        <h2 className="text-8xl font-bold mb-6">
          Transformez vos écrants en œuvres d'art
        </h2>
        <p className="text-xl mb-8">
          Découvrez notre collection premium de fond d'écrants, conçus par des
          artistes indépandant. Donnez vie à vos écrants avec des designs qui
          racontent votre histoire.
        </p>
        <button className="bg-black w-fit text-white px-8 py-3 border-2 border-black hover:bg-white hover:text-black transition-all duration-200 ease-in-out shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
          Voir la collection
        </button>
      </div>
      <div>
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
