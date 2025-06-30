import React from "react";
import SearchBar from "./components/searchbar/SearchBar";
import Hero from "./components/hero/Hero";
import WhySection from "./components/why/WhySection";
import BestSellerSection from "./components/bestseller/BestSellerSection";

const page = () => {
  return (
    <>
      <Hero />
      <WhySection />
      <BestSellerSection />
    </>
  );
};

export default page;
