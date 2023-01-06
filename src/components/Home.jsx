import React from "react";
import { Link } from "react-scroll";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-navy"
    >
      <div className="flex flex-col justify-center h-full p-6 md:p-12">
        <div className="flex flex-col justify-center mx-auto px-6 md:px-28 min-w-full">
          <span className="text-cyan pb-8">Hi, my name is</span>

          <h2 className="text-5xl md:text-7xl font-bold text-lightest-slate">
            Vicky Lee.
          </h2>

          <h2 className="text-5xl md:text-7xl font-bold text-slate py-4">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("I build things for")
                  .pauseFor(400)
                  .typeString(" the web")
                  .pauseFor(200)
                  .typeString(" and mobile.")
                  .start();
              }}
            />
          </h2>

          <h2 className="text-slate my-4 md:w-1/2">
            Full-stack Software Developer / Web Developer / Mobile Developer
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
