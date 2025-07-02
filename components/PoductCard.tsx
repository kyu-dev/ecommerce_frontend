"use client";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

function ProductCard({
  productLink,
  profileLink,
  productName,
  profileName,
  rating,
  price,
}: {
  productLink: string;
  profileLink: string;
  productName: string;
  profileName: string;
  rating: number;
  price: string;
}) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(productLink);
  };

  return (
    <Card
      className="w-fit p-0 overflow-hidden cursor-pointer hover:shadow-lg transition"
      onClick={handleCardClick}
    >
      <CardContent className="p-0">
        <img
          src="/sarkozy.webp"
          className="object-cover h-80 w-80"
          alt={`Image de ${productName}`}
        />
        <article className="px-4 flex flex-col justify-between h-40">
          <h4 className="text-xl py-2 font-bold">{productName}</h4>
          <div className="flex flex-col gap-1 py-2">
            <Link
              href={profileLink}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 hover:underline"
            >
              <img
                src="/sarkozy.webp"
                className="rounded-full h-6 w-6 object-cover"
                alt={`Photo de ${profileName}`}
              />
              {profileName}
            </Link>

            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Star className="fill-black w-4 h-4" />
              <span>{rating}</span>
            </div>
          </div>
        </article>
      </CardContent>

      <CardFooter className="py-2 border-t-2 px-4">
        <div className="px-2 py-1 bg-indigo-300 rounded">{price}</div>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
