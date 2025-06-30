"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

// Exemple de type de produit
type Product = {
  categories?: string;
  name?: string;
  price: number;
  stars: number;
  img?: string;
};

type ProductCarouselProps = {
  products: Product[];
  cardsToShow?: number; // nombre de cartes visibles en même temps
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  cardsToShow = 4,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = Math.max(0, products.length - cardsToShow);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="flex items-center gap-4 w-full">
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="p-2 rounded-full  bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        <ChevronLeft />
      </button>
      <div className="flex gap-6 overflow-hidden">
        {products
          .slice(startIndex, startIndex + cardsToShow)
          .map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
      </div>
      <button
        onClick={handleNext}
        disabled={startIndex >= maxIndex}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default ProductCarousel;
