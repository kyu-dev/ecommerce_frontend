import React from "react";
import SearchBar from "./SearchBar";
import Button from "../ui/Button";
import { Car, LogIn } from "lucide-react";

const NavBar = () => {
  return (
    <div className="font-grotesk font-black flex gap-20 px-18">
      <h1 className="font-bold text-4xl">Wallpaper</h1>
      <SearchBar />
      <div className="flex gap-3">
        <Button label="login" />
        <Button icon={Car} />
      </div>
    </div>
  );
};

export default NavBar;
