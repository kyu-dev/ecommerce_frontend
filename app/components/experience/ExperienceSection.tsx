import React from "react";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col h-screen bg-white lg:flex-row items-center justify-between gap-8 ">
      {/* Colonne image */}
      <div className="relative w-full max-w-2xl">
        {/* Rectangle arrière */}
        <div className="absolute bottom-20 -left-10 w-[90%]  h-full bg-gray-100 rounded-2xl z-0"></div>

        {/* Rectangle milieu */}
        <div className="absolute top-12 -right-7 w-full h-[70%] bg-gray-100 rounded-2xl z-0"></div>

        {/* Image principale */}
        <img
          src="/exp.png"
          alt="Salon"
          className="relative z-10 rounded-2xl right-4 shadow-xl w-full  object-cover"
        />
      </div>

      {/* Colonne texte */}
      <div className="w-full max-w-xl mt-8 lg:mt-0 text-center lg:text-left">
        <h2 className="text-2xl font-bold mb-4">Titre ici</h2>
        <p className="text-gray-600 mb-4">zefazefazef</p>
        <button className="bg-black text-white px-6 py-2 rounded-full">
          Call to action
        </button>
      </div>
    </div>
  );
};

export default ExperienceSection;
