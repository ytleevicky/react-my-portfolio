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
                justify-center w-full h-full text-lightest-slate"
      >
        <div className="pt-40 md:py-20 md:pt-20">
          <p className="text-4xl font-bold border-b-4 border-lightest-slate inline ">
            <span className="text-cyan">01.</span> About me
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between h-full">
          <div className="max-w-md mb-7 w-full">
            <h2 className="max-w-xl mt-3 text-lightest-slate">
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
          <div>
            <img
              src={HeroImage2}
              alt="my profile"
              className="rounded-3xl md:mx-auto w-72 md:w-2/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
