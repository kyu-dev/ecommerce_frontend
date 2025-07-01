import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

function TestimonialsSection() {
  return (
    <div className="bg-white flex flex-col h-screen gap-5 justify-center items-center">
      <h3 className="uppercase text-orange-400">Testimonials</h3>
      <h4 className="text-4xl mb-10 ">Best Selling Product</h4>
      <TestimonialsCarousel />
    </div>
  );
}

export default TestimonialsSection;
