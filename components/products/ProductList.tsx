import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="flex gap-20 pt-10 justify-center">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
