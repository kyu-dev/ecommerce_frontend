import React from "react";
import { Plus, Star } from "lucide-react";

type ProductCardProps = {
  categories?: string;
  name?: string;
  price: number;
  stars: number;
  img?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  categories,
  name,
  price,
  stars,
  img,
}) => {
  return (
    <div className=" flex flex-col  w-64 ">
      <img src={img} alt={name} className="w-50 self-center object-cover" />
      <div className="bg-white p-3 rounded-b-2xl">
        <p className="text-xs text-gray-400 mb-1">{categories}</p>
        <h4 className="text-lg font-semibold mb-2 ">{name}</h4>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }
            />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800 ">
            {price.toFixed(2)} €
          </div>
          <button className="mt-auto bg-[#0D1B39] text-white p-2 rounded-full hover:bg-gray-800 transition">
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
