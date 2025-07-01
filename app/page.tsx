import React from "react";
import SearchBar from "./components/searchbar/SearchBar";
import Hero from "./components/hero/Hero";
import WhySection from "./components/why/WhySection";
import BestSellerSection from "./components/bestseller/BestSellerSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import MaterialsSection from "./components/materials/MaterialsSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";

const page = () => {
  return (
    <>
      <Hero />
      <WhySection />
      <BestSellerSection />
      <ExperienceSection />
      <MaterialsSection />
      <TestimonialsSection />
    </>
  );
};

export default page;
