"use client";
import React from "react";
import PoductCard from "./PoductCard";
import { filterProducts } from "@/utils/filterProducts";

const products = [
  {
    productLink: "/product/1",
    profileLink: "/profile/1",
    productName: "Produit 1",
    profileName: "Profil 1",
    rating: 4.5,
    price: "19.99",
    tags: ["Tag 1", "Tag 3"],
    avatarImage: "/sarkozy.jpeg",
    productImage: "/sarkozy.jpeg",
  },
  {
    productLink: "/product/2",
    profileLink: "/profile/2",
    productName: "Produit 2",
    profileName: "Profil 2",
    rating: 3.8,
    price: "29.99",
    tags: ["Tag 2"],
    avatarImage: "/sarkozy.jpeg",
    productImage: "/sarkozy.jpeg",
  },
  {
    productLink: "/product/3",
    profileLink: "/profile/3",
    productName: "Produit 3",
    profileName: "Profil 3",
    rating: 4.2,
    price: "€39.99",
    tags: ["Tag 4"],
    avatarImage: "/sarkozy.jpeg",
    productImage: "/sarkozy.jpeg",
  },
  {
    productLink: "/product/4",
    profileLink: "/profile/4",
    productName: "Produit 4",
    profileName: "Profil 4",
    rating: 4.7,
    price: "€49.99",
    tags: ["Tag 5"],
    avatarImage: "/sarkozy.jpeg",
    productImage: "/sarkozy.jpeg",
  },
  {
    productLink: "/product/5",
    profileLink: "/profile/5",
    productName: "Produit 5",
    profileName: "Profil 5",
    rating: 4.7,
    price: "€49.99",
    tags: ["Tag 1", "Tag 5"],
    avatarImage: "/sarkozy.jpeg",
    productImage: "/sarkozy.jpeg",
  },
];

function ProductGrid() {
  const filteredProducts = filterProducts(products);

  return (
    <div className="grid grid-cols-1 py-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProducts.map((product, index) => (
        <PoductCard
          key={index}
          productLink={product.productLink}
          profileLink={product.profileLink}
          productName={product.productName}
          profileName={product.profileName}
          rating={product.rating}
          price={product.price}
          avatarImage={product.avatarImage}
          productImage={product.productImage}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
