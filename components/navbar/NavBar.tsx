import React from "react";
import { ShoppingBasket } from "lucide-react";
import Button from "../ui/Button";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/produits", label: "Produits" },
  { href: "/contact", label: "Contact" },
  { href: "/a-propos", label: "À propos" },
];

const NavBar = () => {
  return (
    <header className="border-b-2 border-black">
      <div className="flex items-stretch justify-between px-8 font-grotesk font-black h-20">
        {/* Logo */}
        <div className="flex items-center border-r-2 pr-20">
          <h1 className="text-4xl font-bold">Wallpaper</h1>
        </div>

        {/* Navigation  */}
        <div className="flex items-center  border-black px-20">
          <nav className="flex items-center gap-12">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className=" hover:underline transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 border-l-2 pl-20">
          <Button icon={ShoppingBasket} />
          <Button label="Login" variant="primary" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
