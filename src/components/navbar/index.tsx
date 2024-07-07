import React, { useContext } from "react";
import { Link } from "react-scroll";
import { AlignJustify, X } from "lucide-react";
import logo from '../../assets/images/logo.png';
import ToggleSwitch from "../ToggleSwitch";
import { StyleContext } from "../../contexts/StyleContext";
export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { isDark } = useContext(StyleContext);
  const handleClick = () => setOpen(!open);
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
    <div>
    <header
      className={`flex w-full md:justify-between md:flex-row flex-col md:items-center p-8 ${isDark ? "bg-primary-dark text-white": "bg-primary-light text-black border-b"} ${open ? "h-screen" : ""}`}
    >
      <div className={`flex flex-row justify-between items-center`}>
        <a href="/" className="text-xl font-bold">
          <img className="md:w-16 w-10" src={logo} alt="logo" />
        </a>
        <div className="md:hidden">
          <button onClick={handleClick}>
            {open ? <X  size={24} /> : <AlignJustify size={24} />}
          </button>
        </div>
      </div>
      <ul
        className={`md:flex md:space-x-6 md:flex-row flex-col  ${
          open
            ? " block justify-center items-center text-center gap-10 mt-7 space-y-8"
            : "hidden"
        }`}
      >
        {navdata.map((menu) => (
          <li key={menu.id} className="cursor-pointer text-xl">
            <Link
              to={menu.title.replace(/\s+/g, "")}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {menu.title}
            </Link>
          </li>
        ))}
        <li>
          <ToggleSwitch />
        </li>
      </ul>
    </header>
    <div className={`h-1 bg-gradient-to-r ${isDark ? "from-secondary-dark to-third-dark" : ""}`}></div>
    </div>
  );
}
