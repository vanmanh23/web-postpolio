import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const navdata = [
    {
      id: 1,
      title: "Skills",
    },
    {
      id: 2,
      title: "Work Experiences",
    },
    {
      id: 3,
      title: "Open Source",
    },
    {
      id: 4,
      title: "Contact Me",
    },
  ];
  return (
    <header className="flex justify-between items-center p-8 bg-gray-800 text-white">
    <a href="/" className="text-xl font-bold">
      logo
    </a>
    <ul className="flex space-x-6">
      {navdata.map((menu) => (
        <li key={menu.id} className="cursor-pointer text-xl">
          <Link to={menu.title.replace(/\s+/g, '')} smooth={true} offset={-50} duration={500}>
            {menu.title}
          </Link>
        </li>
      ))}
    </ul>
  </header>

  );
}
