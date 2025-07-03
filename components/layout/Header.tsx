import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1>VynylShop</h1>
      <nav className="flex gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/collection"}>Collection</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
      <div>
        <Button variant="ghost">Profil</Button>
      </div>
    </div>
  );
};

export default Header;
