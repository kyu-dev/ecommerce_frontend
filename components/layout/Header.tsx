import React from "react";
import { Button } from "../ui/button";
import { Disc2, Search, ShoppingBag, UserRound } from "lucide-react";

interface Category {
  id: number;
  name: string;
}

const Header = async () => {
  let categories: Category[] = [];

  try {
    const response = await fetch("http://localhost:3000/category/get");
    const data = await response.json();
  } catch (error) {
    console.error("Erreur:", error);
  }

  return (
    <>
      <div className=" m-4 rounded-xl border">
        <div className="flex border-b p-4 justify-between ">
          <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center">
              <Disc2 />
              <h1 className="fon">VinylShop</h1>
            </div>
            <Button variant="ghost">
              <Search />
            </Button>
          </div>

          <div>
            <Button variant="ghost">
              <ShoppingBag />
            </Button>
            <Button variant="ghost">
              <UserRound />
            </Button>
          </div>
        </div>
        <div className="p-4 flex flex-wrap gap-6">
          {categories.map((category: Category) => (
            <p key={category.id}>{category.name}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
