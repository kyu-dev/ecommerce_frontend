import { MoveRight } from "lucide-react";
import React from "react";

const MaterialsSection = () => {
  return (
    <div className="flex flex-col h-screen bg-white lg:flex-row items-center justify-between gap-8 overflow-hidden w-full">
      <div className="w-full lg:w-1/2 ml-30 mt-8 lg:mt-0 gap-3 flex flex-col  ">
        <h3 className=" text-orange-400 uppercase ">Materials</h3>
        <h4 className="text-4xl">
          Very serious <br />
          materials <br />
          for making furniture
        </h4>
        <p className="text-gray-600 mb-4 max-w-md">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <button className="flex gap-6 text-orange-400">
          More infos <MoveRight />
        </button>
      </div>
      <div className="relative">
        {/* Ombre portée personnalisée */}
        <img
          src="/interieur.jpeg"
          alt="ombre"
          className="w-md h-100 -right-10 absolute z-0 blur-md opacity-40 translate-y-4 translate-x-4 rounded-md"
        />
        <img
          src="/interieur.jpeg"
          alt=""
          className="w-50  object-cover absolute z-1 -top-10 blur-md  -left-50 opacity-40 translate-y-4 translate-x-4 rounded-md"
        />
        <img
          src="/interieur.jpeg"
          alt=""
          className="w-50  h-70 object-cover absolute z-1 blur-md  top-50 -left-50 opacity-40 translate-y-4 translate-x-4 rounded-md"
        />
        <div className="absolute -top-10 -right-10 h-full w-100 bg-gray-100 rounded-md z-0"></div>
        {/*vrai images*/}
        <img
          src="/interieur.jpeg"
          alt=""
          className="w-md h-100 -right-10 relative z-10 rounded-md"
        />
        <img
          src="/interieur.jpeg"
          alt=""
          className="w-50   object-cover absolute z-1 -top-10 -left-50 rounded-md"
        />
        <img
          src="/interieur.jpeg"
          alt=""
          className="w-50  h-70 object-cover absolute z-1 top-50 -left-50 rounded-md"
        />
      </div>
    </div>
  );
};

export default MaterialsSection;
