import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import swift from "../assets/swift.png";
import nodejs from "../assets/nodejs.png";
import github from "../assets/github.png";
import kotlin from "../assets/kotlin.png";
import csharp from "../assets/csharp.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: nodejs,
      title: "Node.js",
      style: "shadow-green-400",
    },
    {
      id: 5,
      src: csharp,
      title: "C#",
      style: "shadow-purple-400",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: swift,
      title: "Swift",
      style: "shadow-orange-400",
    },
    {
      id: 8,
      src: kotlin,
      title: "Kotlin",
      style: "shadow-indigo-400",
    },
    
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-navy w-full md:h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
                justify-center w-full h-full text-sky"
      >
        <div className="pt-20">
          <p className="text-4xl font-bold border-b-4 border-sky inline ">
            <span className="text-cyan">03.</span> Experience
          </p>
          <p className="py-6 text-sky">These are the technologies I've worked with.</p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 
                        text-center py-8 px-12 sm:px-0 text-sky"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt=""
                className="w-20 mx-auto"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
