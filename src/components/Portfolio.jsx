import React, { useState } from "react";
import groupmatesFinder from "../assets/portfolio/groupmatesFinder.png";
import worldCountries from "../assets/portfolio/worldCountries.png";
import Video from "./Video";

const Portfolio = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  const portfolios = [
    {
      id: 1,
      src: groupmatesFinder,
      codeURL: "https://github.com/ytleevicky/GroupMatesFinder",
      demoURL: "https://youtu.be/O9rA6JNOSPg",
    },
    {
      id: 2,
      src: worldCountries,
      codeURL: "https://github.com/ytleevicky/world-countries",
      demoURL: "https://youtu.be/gB5e6Y6h_5Y",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-navy text-lightest-slate h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col 
      justify-center w-full h-full"
      >
        <div className="pt-20">
          <p className="text-4xl font-bold inline border-b-4 border-lightest-slate">
            <span className="text-cyan">02.</span> Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-8 text-lightest-slate">
          {portfolios.map(({ id, src, codeURL, demoURL }) => (
            <div
              key={id}
              className="shadow-md shadow-slate rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex justify-center items-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200"
                  onClick={() => setButtonPopup(true)}
                >
                  Demo
                </button>

                <Video
                  trigger={buttonPopup}
                  setTrigger={setButtonPopup}
                  url={demoURL}
                />

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
