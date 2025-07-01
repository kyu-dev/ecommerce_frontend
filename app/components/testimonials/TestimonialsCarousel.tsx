"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialsCard";

type Testimonial = {
  backgroundImage: string;
  avatar: string;
  name: string;
  message: string;
  rating?: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Arthur",
    avatar: "/exp.png",
    rating: 5,
    message: "Super produit je recommande",
    backgroundImage: "/interieur.jpeg",
  },
  {
    name: "Isabelle",
    avatar: "/exp.png",
    rating: 4,
    message:
      "Livraison rapide\nProduit conforme à la description\nJe suis ravie !",
    backgroundImage: "/interieur.jpeg",
  },
  {
    name: "Karim",
    avatar: "/exp.png",
    rating: 5,
    message: "Table magnifique, très bonne qualité.",
    backgroundImage: "/interieur.jpeg",
  },
  {
    name: "Julie",
    avatar: "/exp.png",
    rating: 5,
    message: "Une expérience client au top, merci !",
    backgroundImage: "/interieur.jpeg",
  },
];

type TestimonialsCarouselProps = {
  cardsToShow?: number;
};

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  cardsToShow = 3,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="flex items-center justify-center gap-6 w-full">
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        <ChevronLeft />
      </button>

      <div className="flex gap-10 overflow-hidden ">
        {testimonials
          .slice(startIndex, startIndex + cardsToShow)
          .map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
      </div>

      <button
        onClick={handleNext}
        disabled={startIndex >= maxIndex}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default TestimonialsCarousel;
