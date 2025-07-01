import { MoveRight } from "lucide-react";
import React from "react";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col h-screen bg-white lg:flex-row items-center justify-between gap-8 w-full">
      {/* Colonne image */}
      <div className="relative w-full max-w-2xl">
        {/* Rectangle arrière */}
        <div className="absolute bottom-10 -left-10 w-[90%]  h-full bg-gray-100 rounded-md z-0"></div>

        {/* Rectangle milieu */}
        <div className="absolute top-12 -right-7 w-full h-[70%] bg-gray-100 rounded-md z-0"></div>
        <img
          src="/interieur.jpeg"
          alt="Salon"
          className="absolute z-9s opacity-60 blur-lg top-7 h-100  rounded-md right-4 shadow-xl w-full  object-cover"
        />

        {/* Image principale */}
        <img
          src="/interieur.jpeg"
          alt="Salon"
          className="relative z-10 rounded-md right-4 h-100 shadow-xl w-full object-cover"
        />
      </div>

      {/* Colonne texte */}
      <div className="w-full lg:w-1/2 ml-30 mt-8 lg:mt-0 gap-3 flex flex-col  ">
        <h3 className=" text-orange-400 uppercase ">experiences</h3>
        <h4 className="text-4xl">
          we provide you the <br />
          best experience
        </h4>
        <p className="text-gray-600 mb-4 max-w-md">
          You don't have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <button className="flex gap-6 text-orange-400">
          More infos <MoveRight />
        </button>
      </div>
    </div>
  );
};

export default ExperienceSection;
