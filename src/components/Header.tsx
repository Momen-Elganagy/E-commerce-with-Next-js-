import Link from "next/link";
import React from "react";
import Image from "next/image";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Products", path: "/products" },
];

export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <Image src="/logo.svg" alt="Logo" width={30} height={30} />
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          My-store
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <Link href={path} className="text-white hover:text-blue-300">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
