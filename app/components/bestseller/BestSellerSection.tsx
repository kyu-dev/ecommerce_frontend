import React from "react";
import ProductCarousel from "../product/ProductCarousel";
import Filter from "./Filter";

const produits = [
  // à modifié avec de vrais données
  {
    categories: "Chaise",
    name: "Chaise Scandinave",
    price: 89.99,
    stars: 4,
    img: "/chair.png",
  },
  {
    categories: "Table",
    name: "Table Moderne",
    price: 199.99,
    stars: 5,
    img: "/chair.png",
  },
  {
    categories: "Canapé",
    name: "Canapé Confort",
    price: 399.99,
    stars: 5,
    img: "/chair.png",
  },
  {
    categories: "Lampe",
    name: "Lampe Design",
    price: 49.99,
    stars: 3,
    img: "/chair.png",
  },
  {
    categories: "Fauteuil",
    name: "Fauteuil Relax",
    price: 129.99,
    stars: 4,
    img: "/chair.png",
  },
];

const BestSellerSection = () => {
  return (
    <div className="bg-[#F7F7F7] flex flex-col gap-16 items-center">
      <h3 className="text-4xl pt-20 font-bold">Best Selling Product</h3>
      <Filter />
      <div className="flex justify-center">
        <ProductCarousel products={produits} cardsToShow={4} />
      </div>
    </div>
  );
};

export default BestSellerSection;
