import React from "react";
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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/category/get`,
      {
        cache: "no-store",
      }
    );

    const data = await response.json();
    categories = data.data;
  } catch (error) {
    console.error("Erreur:", error);
  }

  return (
    <div className="m-2 md:m-4 rounded-xl border">
      <div className="flex border-b p-2 md:p-4 justify-between items-center">
        <div className="flex gap-2 md:gap-3 items-center">
          <Link href="/" className="flex gap-1 items-center">
            <img className="h-12 md:h-16" src={"/beer.jpg"} alt="BeerShop Logo" />
            <h1 className="text-lg md:text-xl font-bold">BeerShop</h1>
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <CardBtn />
          <LoginBtn />
        </div>
      </div>

      <div className="p-2 md:p-4 flex flex-row flex-wrap gap-2 md:gap-4 items-center">
        {categories.length > 0 ? (
          categories.map((category) => (
            <Link
              key={category.id}
              href={`/catalogue?category=${encodeURIComponent(category.name)}`}
              className="text-primary text-sm md:text-base px-1 py-0 hover:underline transition-colors whitespace-nowrap"
            >
              {category.name}
            </Link>
          ))
        ) : (
          <p className="text-muted-foreground text-sm">Aucune catégorie disponible.</p>
        )}
      </div>
    </div>
  );
};

export default Header;
