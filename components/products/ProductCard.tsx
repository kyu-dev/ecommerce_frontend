import { Star } from "lucide-react";
import React from "react";

type ProductCardProps = {
  img: string;
  title: string;
  price: string;
  isNew?: boolean;
};

function ProductCard({ img, title, price, isNew = false }: ProductCardProps) {
  return (
    <div className="relative border-2 border-black bg-white w-[300px] shadow-[4px_4px_0px_0px_black] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_black] transition-all duration-200 ease-in-out">
      {isNew && (
        <div className="absolute top-2 left-2 bg-yellow-300 text-black px-2 py-1 text-xs font-extrabold uppercase border-2 border-black z-10">
          New
        </div>
      )}
      <img
        src={img}
        alt={`photo de ${title}`}
        className="w-full h-[300px] object-cover border-b-2 border-black"
      />
      <div className="flex flex-col gap-3 p-4">
        <h3 className="text-lg font-extrabold text-black text-center uppercase">
          {title}
        </h3>

        <div className="flex gap-1 ">
          <Star className=" w-5 h-5 text-black fill-black" />
        </div>

        <div className="flex justify-between items-center pt-3 border-t-2 border-black mt-2">
          <div className="text-sm bg-emerald-400 border-2 border-black px-3 py-1 font-bold">
            {price}
          </div>
          <button className="bg-white border-2 border-black px-4 py-2 font-bold text-black hover:bg-black hover:text-white transition-all duration-150 shadow-[2px_2px_0px_0px_black] active:shadow-none active:translate-x-0.5 active:translate-y-0.5">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
