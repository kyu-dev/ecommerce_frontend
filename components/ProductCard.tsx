"use client";
import React from "react";
import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cartStore";
import { useUserStore } from "@/store/userStore";
import Image from "next/image";

interface ProductCardProps {
  productId: number;
  title: string;
  price: number;
  img: string;
  description?: string;
  rating?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productId,
  title,
  price,
  img,
  description,
  rating = 0,
}) => {
  const { user } = useUserStore();
  const { addToBackendCart, addToLocalCart } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user) {
      addToBackendCart(user.id, { productId, quantity: 1 });
    } else {
      addToLocalCart({ productId, quantity: 1 });
    }
  };

  return (
    <Card className="group p-0 shadow-md border overflow-hidden hover:shadow-xl transition-shadow duration-200 cursor-pointer">
      <div className="relative overflow-hidden ">
        <Image
          src={img}
          alt={title}
          className="w-full h-48 object-cover  group-hover:scale-105 transition-transform duration-200"
          width={300}
          height={192}
        />
        <div className="absolute top-2 left-2 flex items-center gap-1 bg-white/90 rounded-full px-2 py-0.5 shadow text-xs">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={i < rating ? "text-yellow-400" : "text-gray-300"}
            >
              ★
            </span>
          ))}
          <span className="ml-1 text-slate-700 font-medium">{rating}/5</span>
        </div>
      </div>
      <CardFooter className="flex flex-col items-start gap-2 p-4">
        <h3 className="text-lg font-bold line-clamp-1 w-full">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2 w-full mb-2">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between w-full mt-2">
          <span className="text-xl font-extrabold text-primary">{price} €</span>
        </div>
        <Button type="button" onClick={handleAddToCart}>
          Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
