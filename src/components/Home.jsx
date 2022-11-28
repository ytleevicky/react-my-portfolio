import React from "react";
import { Link } from "react-scroll";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-navy"
    >
      <div className="flex flex-col justify-center h-full">
        <div className="flex flex-col justify-center mx-auto px-6 md:px-28 ">
          <span className="text-cyan pb-8">Hi, my name is</span>

          <h2 className="text-5xl md:text-7xl font-bold text-sky">Vicky Lee.</h2>

          <h2 className="text-5xl md:text-7xl font-bold text-sky-dark py-4">
            I build things for the web and mobile
          </h2>

          <h2 className="text-sky-dark my-4 w-1/2">
            I am a software engineer specializing in building web and mobile application.
          </h2>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-cyan w-fit px-6 py-3 my-2 
          flex items-center
          border-2 border-cyan rounded-md
          cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
