import React from "react";
import Hero from "./components/home/hero/Hero";
import WhySection from "./components/home/why/WhySection";
import BestSellerSection from "./components/home/bestseller/BestSellerSection";
import ExperienceSection from "./components/home/experience/ExperienceSection";
import MaterialsSection from "./components/home/materials/MaterialsSection";
import TestimonialsSection from "./components/home/testimonials/TestimonialsSection";

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
