import React from "react";
import groupmatesFinder from "../assets/portfolio/groupmatesFinder.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: groupmatesFinder,
      codeURL: "https://github.com/ytleevicky/GroupMatesFinder",
      demoURL:
        "https://drive.google.com/file/d/19_W0t_W8B4piBwR7IVBgW4AQ-snpZAHV/view?usp=share_link",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-navy text-sky md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col 
      justify-center w-full h-full">
        <div className="pt-20">
          <p className="text-4xl font-bold inline border-b-4 border-sky">
            <span className="text-cyan">02.</span> Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-8 text-sky">
          {portfolios.map(({ id, src, codeURL, demoURL }) => (
            <div
              key={id}
              className="shadow-md shadow-sky-dark rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex justify-center items-center">
                <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                  <a
                    href={demoURL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                  <a
                    href={codeURL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
