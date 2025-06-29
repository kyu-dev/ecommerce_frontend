import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="flex gap-20 pt-10 justify-center">
      <ProductCard
        img="/wallpaper1.webp"
        title="wallpaper  "
        isNew={true}
        price="23€"
      />
      <ProductCard
        img="/w4.webp"
        title="wallpaper  "
        isNew={true}
        price="23€"
      />
      <ProductCard
        img="/w3.webp"
        title="wallpaper  "
        isNew={true}
        price="23€"
      />
      <ProductCard
        img="/w2.webp"
        title="wallpaper  "
        isNew={true}
        price="23€"
      />
    </div>
  );
};

export default ProductList;
