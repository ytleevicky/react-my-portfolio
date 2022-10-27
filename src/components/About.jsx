import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          repudiandae dignissimos recusandae laboriosam alias cupiditate at ab
          error vel, est aliquid quod aperiam, obcaecati unde? Vel excepturi
          voluptate est explicabo?
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui
          libero! Fugiat eum, minima sunt sequi at, laudantium culpa reiciendis
          eos repudiandae dignissimos consequuntur aliquid ad corrupti iste
          fugit est.
        </p>
      </div>
    </div>
  );
};

export default About;
