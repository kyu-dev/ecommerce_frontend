import React from "react";

const Filter = () => {
  return (
    <>
      <nav className="bg-[#EEEEEE] rounded-full p-1 inline-flex gap-1">
        <button className="px-6 py-2 rounded-full bg-white text-black font-medium shadow">
          Chair
        </button>
        <button className="px-6 py-2 rounded-full text-gray-500 hover:bg-white/50">
          Beds
        </button>
        <button className="px-6 py-2 rounded-full text-gray-500 hover:bg-white/50">
          Sofa
        </button>
        <button className="px-6 py-2 rounded-full text-gray-500 hover:bg-white/50">
          Lamp
        </button>
      </nav>
    </>
  );
};

export default Filter;
