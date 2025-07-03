"use client";
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { products } from "@/data/products";

const TopSection = () => {
  return (
    <div>
      <h3 className="p-6 text-5xl font-bold">Top Produit</h3>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link key={index} href={`/product/${product.id}`}>
              <div>
                <ProductCard
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  description={product.description}
                  onAddToCart={() =>
                    console.log(`${product.title} added to cart`)
                  }
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
