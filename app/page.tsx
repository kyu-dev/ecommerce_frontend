import Hero from "@/components/hero/Hero";
import ProductList from "@/components/products/ProductList";
import Testimonials from "@/components/testimonials/Testimonials";
import Newsletter from "@/components/newsletter/Newsletter";
import React from "react";
import Infos from "@/components/infos/Infos";
import Story from "@/components/storytelling/Story";

const page = () => {
  return (
    <div className="font-grotesk flex gap-y-20 flex-col ">
      <Hero />
      <Story />

      <div className="flex flex-col">
        <h3 className="px-30 font-semibold self-center text-4xl">
          Best Sellers
        </h3>
        <ProductList />
      </div>

      <Infos />
      <Newsletter />
      <Testimonials />
    </div>
  );
};

export default page;
