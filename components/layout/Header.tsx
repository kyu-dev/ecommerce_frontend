import React from "react";
import { Button } from "../ui/button";
import { Disc2, Search, ShoppingBag } from "lucide-react";
import LoginBtn from "../LoginBtn";
import CardBtn from "../CartBtn";
import Link from "next/link";

type categoryType = {
  id: number;
  name: string;
};

const Header = async () => {
  let categories: categoryType[] = [];

  try {
    const response = await fetch("http://localhost:3000/category/get", {
      cache: "no-store",
    });

    const data = await response.json();
    categories = data.data;
  } catch (error) {
    console.error("Erreur:", error);
  }

  return (
    <div className="m-4 rounded-xl border">
      <div className="flex border-b p-4 justify-between">
        <div className="flex gap-3 items-center">
          <Link href="/" className="flex gap-1 items-center">
            <Disc2 />
            <h1 className="fon">BeerShop</h1>
          </Link>
        </div>

        <div className="flex items-center">
          <CardBtn />
          <LoginBtn />
        </div>
      </div>

      <div className="p-4 flex flex-row flex-wrap gap-4 items-center">
        {categories.length > 0 ? (
          categories.map((category) => (
            <Link
              key={category.id}
              href={`/catalogue?category=${encodeURIComponent(category.name)}`}
              className="text-primary text-base px-1 py-0 hover:underline transition-colors"
            >
              {category.name}
            </Link>
          ))
        ) : (
          <p className="text-muted-foreground">Aucune catégorie disponible.</p>
        )}
      </div>
    </div>
  );
};

export default Header;
