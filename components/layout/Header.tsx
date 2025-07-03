"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Disc2, Search, ShoppingBag, UserRound } from "lucide-react";
import SearchBar from "../SearchBar";
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className=" m-4 rounded-xl border">
        <div className="flex border-b p-4 justify-between ">
          <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center">
              <Disc2 />
              <h1 className="fon">VynylShop</h1>
            </div>
            <Button onClick={toggleSearch} variant="ghost">
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
        <div className="p-2 flex gap-4">
          <p>NOUVEAUTÉ</p>
          <p>NOUVEAUTÉ</p>
          <p>NOUVEAUTÉ</p>
          <p>NOUVEAUTÉ</p>
          <p>NOUVEAUTÉ</p>
        </div>
      </div>
      <div className="flex justify-center">
        {isSearchOpen ? <SearchBar /> : null}
      </div>
    </>
  );
};

export default Header;
