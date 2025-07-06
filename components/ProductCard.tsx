"use client";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  title: string;
  price: number;
  img: string;
  description?: string;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  img,
  description,
  onAddToCart,
}) => {
  return (
    <Card className=" p-0">
      <CardContent className="p-0">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardContent>
      <CardFooter className="flex flex-col pb-5 items-start gap-2">
        <h3 className="text-xl font-bold">{title}</h3>
        {description && <p>{description}</p>}
        <div className="flex justify-between pt-12 w-full">
          <Button className="w-fit" onClick={onAddToCart}>
            Add to Cart
          </Button>
          <p className="text-lg font-bold mt-2">${price}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
