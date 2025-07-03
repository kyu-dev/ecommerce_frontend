"use client";
import React from "react";
import ProductCard from "./ProductCard";

const TopSection = () => {
  const products = [
    {
      title: "Product 1",
      price: 19.99,
      imageUrl: "/cd.webp",
      description: "This is a description for Product 1.",
      onAddToCart: () => console.log("Product 1 added to cart"),
    },
    {
      title: "Product 2",
      price: 29.99,
      imageUrl: "/cd.webp",
      description: "This is a description for Product 2.",
      onAddToCart: () => console.log("Product 2 added to cart"),
    },
    {
      title: "Product 3",
      price: 39.99,
      imageUrl: "/cd.webp",
      description: "This is a description for Product 3.",
      onAddToCart: () => console.log("Product 3 added to cart"),
    },
    {
      title: "Product 3",
      price: 39.99,
      imageUrl: "/cd.webp",
      description: "This is a description for Product 3.",
      onAddToCart: () => console.log("Product 3 added to cart"),
    },
    {
      title: "Product 3",
      price: 39.99,
      imageUrl: "/cd.webp",
      description: "This is a description for Product 3.",
      onAddToCart: () => console.log("Product 3 added to cart"),
    },
  ];

  return (
    <div className="p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              description={product.description}
              onAddToCart={product.onAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSection;
