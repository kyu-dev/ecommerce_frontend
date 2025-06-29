import Hero from "@/components/hero/Hero";
import ProductList from "@/components/products/ProductList";
import Testimonials from "@/components/testimonials/Testimonials";
import Newsletter from "@/components/newsletter/Newsletter";
import React from "react";

const page = () => {
  return (
    <div className="font-grotesk flex flex-col ">
      <Hero />
      <div className="flex flex-col">
        <h3 className="px-30 font-semibold text-4xl">New Product</h3>
        <ProductList />
      </div>
      <Newsletter />
      <Testimonials />
    </div>
  );
};

export default page;
