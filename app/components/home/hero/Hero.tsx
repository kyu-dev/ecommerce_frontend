import React from "react";
import SearchBar from "../searchbar/SearchBar";

const Hero = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_80%,rgba(255,255,255,1)),url('/hero.png')] bg-cover bg-center h-screen w-screen">
      <div className="flex flex-col gap-10 items-center pt-50 h-full">
        <h2 className="text-white text-7xl text-center">
          Make Your Interior More <br /> Minimalistic & Modern
        </h2>
        <p className="text-center text-white text-2xl">
          Turn your room with panto into a lot more <br /> minimalist and modern
          with ease and speed
        </p>
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
