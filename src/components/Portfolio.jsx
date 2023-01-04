import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import groupmatesFinder from "../assets/portfolio/groupmatesFinder.png";
import worldCountries from "../assets/portfolio/worldCountries.png";
import yardSale from "../assets/portfolio/yardSale.png";

const Portfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(null);

  const portfolios = [
    {
      id: 0,
      src: groupmatesFinder,
      codeURL: "https://github.com/ytleevicky/GroupMatesFinder",
      demoURL: "https://youtu.be/O9rA6JNOSPg",
      youtubeID: "O9rA6JNOSPg",
    },
    {
      id: 1,
      src: yardSale,
      codeURL: "https://github.com/ytleevicky/android-yard-sale",
      demoURL: "https://youtu.be/FnRlRJ7X5Xc",
      youtubeID: "FnRlRJ7X5Xc",
    },
    {
      id: 2,
      src: worldCountries,
      codeURL: "https://github.com/ytleevicky/world-countries",
      demoURL: "https://youtu.be/gB5e6Y6h_5Y",
      youtubeID: "gB5e6Y6h_5Y",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-navy text-lightest-slate md:h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-12 flex flex-col 
      justify-center w-full h-full"
      >
        <div className="pt-24 md:pt-0">
          <p className="text-4xl font-bold inline border-b-4 border-lightest-slate">
            <span className="text-cyan">02.</span> Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 text-lightest-slate">
          {portfolios.map(({ id, src, codeURL, youtubeID }) => (
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
                  onClick={() => {
                    setOpen(true);
                    setCurrentVideoId(youtubeID);
                  }}
                >
                  Demo
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

          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId={currentVideoId}
            onClose={() => setOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
