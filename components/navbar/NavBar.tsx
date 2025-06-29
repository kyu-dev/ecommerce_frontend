import React from "react";
import SearchBar from "./SearchBar";
import Button from "../ui/Button";
import { ShoppingBasket } from "lucide-react";

const NavBar = () => {
  return (
    <>
      <div className="font-grotesk font-black flex justify-between px-18 border-b pb-5">
        <h1 className="font-bold text-4xl">Wallpaper</h1>
        <SearchBar />
        <div className="flex gap-4">
          <Button icon={ShoppingBasket} />
          <Button label="login" variant="primary" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
