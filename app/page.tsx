import React from "react";
import SearchBar from "./components/searchbar/SearchBar";

const page = () => {
  return (
    <>
      <div className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_80%,rgba(255,255,255,1)),url('/hero.png')] bg-cover bg-center h-screen w-screen">
        <div className=" flex flex-col gap-4">
          <h2 className="text-white text-7xl text- text-center">
            Make Your Interior More <br></br> Minimalistic & Modern
          </h2>
          <p className="text-center text-white text-xl">
            Turn your room with panto into a lot more <br /> minimalist and
            modern with ease and speed
          </p>
          <SearchBar />
        </div>
      </div>
      <div style={{ background: "white", minHeight: "100vh", width: "100vw" }}>
        {/* Ajoutez ici le contenu de la suite de la page */}
      </div>
    </>
  );
};

export default page;
