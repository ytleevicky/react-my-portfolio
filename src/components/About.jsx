import React from "react";

import HeroImage2 from "../assets/heroImage3.jpg";

const About = () => {
  return (
    <div
      name="about me"
      className="bg-navy md:h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-6 md:p-12 flex flex-col
        justify-center w-full h-full text-lightest-slate"
      >
        <div className="pt-24 md:pt-0">
          <p className="text-4xl font-bold inline border-b-4 border-lightest-slate ">
            <span className="text-cyan">01.</span> About me
          </p>
        </div>

        <div className="flex flex-col md:flex-row py-6 justify-between md:space-x-14">
          <div className="max-w-xl mb-7 md:w-4/6">
            <h2>
              Hello! I'm Vicky Lee, a Junior Software Engineer currently based
              in Toronto. I'm passionate about building things for the web and
              mobile.
            </h2>

            <br />

            <h2>
              In June 2021, I completed my 4-years undergraduate studies in
              Computer Science at Hong Kong Baptist University. Once I
              graduated, I worked as a C# .NET Programmer in Hong Kong Electric
              Co. Ltd. (One of Hong Kong's two major electrical utility
              providers) for more than a year. While working, I gradually
              develop my interest in mobile app development.
            </h2>

            <br />

            <h2>
              Therefore, in September 2022, I come to Toronto to pursue a
              postgraduate certificate concentrating on the discipline of mobile
              app development at the George Brown College. I'm now looking for a
              junior dev position to finally kick start my career in Toronto and
              learn among professionals.
            </h2>
          </div>

          {/* Image */}
          <div className="md:w-2/6">
            <img
              src={HeroImage2}
              alt="my profile"
              className="rounded-3xl mx-auto w-3/4 md:w-full transform transition-all hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
