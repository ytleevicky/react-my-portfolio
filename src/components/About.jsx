import React from 'react';

import HeroImage2 from '../assets/heroImage.jpg';

const About = () => {
  return (
    <div
      name='about me'
      className='bg-navy md:h-screen'
    >
      <div
        className='max-w-screen-lg mx-auto p-6 md:p-12 flex flex-col
        justify-center w-full h-full text-lightest-slate'
      >
        <div className='pt-24 md:pt-0'>
          <p className='text-4xl font-bold inline border-b-4 border-lightest-slate '>
            <span className='text-cyan'>01.</span> About me
          </p>
        </div>

        <div className='flex flex-col md:flex-row py-6 justify-between md:space-x-14'>
          <div className='max-w-xl mb-7 md:w-4/6'>
            <h2>
              Hi, I'm Vicky Lee, an international student from Hong Kong
              currently pursuing my studies at George Brown College. With a
              passion for continuous learning, I strive to expand my knowledge
              and skills in various areas that intrigue me: Software
              development, personal finance, fitness and health, and much more.
            </h2>

            <br />

            <h2>
              When I'm not focused on academics, you can often find me in the
              water, as swimming has become a beloved pastime of mine. The
              tranquillity and sense of freedom I experience while swimming
              provide a perfect balance to my busy student life. Additionally, I
              find joy in gliding across the ice, as ice skating has become
              another activity I relish since I arrived in Canada.
            </h2>

            <br />

            <h2>
              Through my dedication to personal growth and exploration, I aim to
              make a positive impact in both my academic and personal spheres. I
              eagerly embrace new challenges and opportunities that come my way,
              always striving to push my boundaries and reach new heights.
            </h2>
          </div>

          {/* Image */}
          <div className='md:w-2/6'>
            <img
              src={HeroImage2}
              alt='my profile'
              className='rounded-3xl mx-auto w-3/4 md:w-full transform transition-all hover:scale-105'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
