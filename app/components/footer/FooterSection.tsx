import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <div className="bg-[#F7F7F7] h-100 flex items-center justify-evenly">
      <div className="flex flex-col max-w-xs gap-5">
        <h4 className="text-2xl font-bold">Panto</h4>
        <p>
          The advantage of hiring a workspace with us is that givees you
          comfortable service and all-around facilities.
        </p>
      </div>
      <nav className="flex flex-col gap-2">
        <Link
          href="/services"
          className="text-orange-400 hover:text-orange-500"
        >
          Services
        </Link>
        <Link
          href="/services/design"
          className="text-sm text-gray-600 hover:text-gray-800"
        >
          Design
        </Link>
        <Link
          href="/services/installation"
          className="text-sm text-gray-600 hover:text-gray-800"
        >
          Installation
        </Link>
      </nav>
      <nav className="flex flex-col gap-2">
        <Link href="/about" className="text-orange-400 hover:text-orange-500">
          À propos
        </Link>
        <Link
          href="/about/histoire"
          className="text-sm text-gray-600 hover:text-gray-800"
        >
          Notre histoire
        </Link>
        <Link
          href="/about/equipe"
          className="text-sm text-gray-600 hover:text-gray-800"
        >
          Notre équipe
        </Link>
      </nav>
      <nav className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h4 className="text-orange-400">Nous suivre</h4>
          <div className="flex flex-col gap-1">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-xs text-gray-600 hover:text-gray-800"
            >
              Facebook
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-xs text-gray-600 hover:text-gray-800"
            >
              Twitter
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-xs text-gray-600 hover:text-gray-800"
            >
              Instagram
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FooterSection;
