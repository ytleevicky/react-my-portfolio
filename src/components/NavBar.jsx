import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      linkOrder: "01.",
      link: "about me",
    },
    {
      id: 2,
      linkOrder: "02.",
      link: "portfolio",
    },
    {
      id: 3,
      linkOrder: "03.",
      link: "experience",
    },
    {
      id: 4,
      linkOrder: "04.",
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-lightest-slate bg-navy fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2 text-cyan">Vicky</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, linkOrder }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium
                                text-lightest-slate hover:scale-105 duration-200"
          >
            <Link
              to={link}
              smooth
              duration={500}
              className="hover:text-cyan"
            >
              <span className="text-cyan">{linkOrder}</span> {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-cyan md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-start px-8
            absolute top-0 left-0 w-full h-screen 
            bg-navy"
        >
          {links.map(({ id, linkOrder, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                className="hover:text-cyan text-lightest-slate"
              >
                <span className="text-cyan">{linkOrder}</span> {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
