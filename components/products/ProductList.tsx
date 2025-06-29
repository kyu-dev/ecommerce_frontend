import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="flex gap-20 pt-10 justify-center">
      <ProductCard img="/wallpaper1.webp" />
      <ProductCard img="/w4.webp" />
      <ProductCard img="/w2.webp" />
      <ProductCard img="/w3.webp" />
    </div>
  );
};

export default ProductList;
