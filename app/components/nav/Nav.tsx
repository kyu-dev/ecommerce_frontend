import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const Nav = () => {
  return (
    <div className="z-10 grid grid-cols-[1fr_auto_1fr] fixed items-center text-white w-full px-8 py-4">
      <h1 className="text-4xl justify-self-start">Panto</h1>
      <nav className="flex gap-10 justify-self-center">
        <Link href="/Shop">Shop</Link>
        <Link href="/produits">À propos</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="flex items-center gap-6 justify-self-end">
        <button className="flex gap-1">
          <ShoppingBag /> 0
        </button>
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Nav;
