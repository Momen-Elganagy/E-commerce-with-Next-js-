import Link from 'next/link'
import React from 'react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Products', path: '/products' },
];

export default function Navigation() {
  return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link href="/" className="btn btn-ghost text-xl">My-store</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
{navItems.map(({name , path}) => (
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
