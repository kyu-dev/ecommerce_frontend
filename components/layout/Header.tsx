"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search, ShoppingBag, UserRound } from "lucide-react";
import SearchBar from "../SearchBar";
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="flex justify-between p-10">
        <h1>VynylShop</h1>
        <nav className="flex gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/collection"}>Collection</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
        <div>
          <Button onClick={toggleSearch} variant="ghost">
            <Search />
          </Button>
          <Button variant="ghost">
            <ShoppingBag />
          </Button>
          <Button variant="ghost">
            <UserRound />
          </Button>
        </div>
      </div>
      {isSearchOpen ? <SearchBar /> : null}
    </>
  );
};

export default Header;
