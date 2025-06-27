import React from "react";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="font-grotesk font-black flex gap-20 px-18">
      <h1 className="font-bold text-4xl">Wallpaper</h1>
      <SearchBar />
    </div>
  );
};

export default NavBar;
