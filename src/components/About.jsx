import React from "react";

import HeroImage2 from "../assets/heroImage2.jpeg";

const About = () => {
  return (
    <div
      name="about me"
      className="h-screen w-full bg-navy"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
                justify-center w-full h-full text-sky"
      >
        <div className="pt-20 md:py-20">
          <p className="text-4xl font-bold border-b-4 border-sky inline ">
            <span className="text-cyan">01.</span> About me
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between h-full">
          <div className="max-w-md mb-7 w-full">
            <h2 className="max-w-xl mt-3 text-sky">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              qui natus delectus molestias eum sed praesentium in adipisci
              accusamus. Molestias eaque aliquam ea iusto? Quaerat, ducimus?
              Odit nemo ipsam libero?
            </h2>
          </div>

          {/* Image */}
          <div>
            <img
              src={HeroImage2}
              alt="my profile"
              className="rounded-3xl mx-auto w-2/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
