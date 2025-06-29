import Hero from "@/components/hero/Hero";

import ProductList from "@/components/products/ProductList";
import React from "react";

const page = () => {
  return (
    <div className="font-grotesk">
      <Hero />
      <ProductList />
    </div>
  );
};

export default page;
