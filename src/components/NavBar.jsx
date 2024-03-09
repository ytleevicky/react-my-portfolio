import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollToTop, setScrollToTop] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos <= 0) {
      setVisible(true);
      setScrollToTop(true);
    } else if (currentScrollPos > prevScrollPos) {
      setVisible(false);
      setScrollToTop(false);
    } else {
      setVisible(true);
      setScrollToTop(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const links = [
    // {
    //   id: 1,
    //   linkOrder: "01.",
    //   link: "about me",
    // },
    {
      id: 1,
      linkOrder: '01.',
      link: 'portfolio',
    },
    {
      id: 2,
      linkOrder: '02.',
      link: 'experience',
    },
    {
      id: 3,
      linkOrder: '03.',
      link: 'contact',
    },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full px-6 py-4 text-lightest-slate bg-navy fixed z-10 opacity-95
      ${visible ? 'mt-[100] duration-300' : 'mt-[-100px] duration-300 '} 
      ${scrollToTop ? '' : 'shadow-lg'}
      `}
    >
      <div>
        <a
          href='/'
          className='text-4xl font-signature ml-2 text-cyan'
        >
          Vicky
        </a>
      </div>

      <ul className='hidden lg:flex items-center'>
        {links.map(({ id, link, linkOrder }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-light
                                text-lightest-slate hover:scale-105 duration-200'
          >
            <Link
              to={link}
              smooth
              duration={500}
              className='hover:text-cyan'
            >
              <span className='text-cyan'>{linkOrder}</span> {link}
            </Link>
          </li>
        ))}

        <a
          href='/resume.pdf'
          className='text-cyan font-light border border-cyan rounded-md py-2 px-3 mx-3 hover:scale-105 duration-300'
          target='_blank'
          rel='noopener noreferrer'
        >
          Resume
        </a>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-cyan lg:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className='flex flex-col justify-center items-center px-8
            absolute top-0 left-0 w-full h-screen 
            bg-navy'
        >
          {links.map(({ id, linkOrder, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-6 text-4xl'
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                className='hover:text-cyan text-lightest-slate'
              >
                <span className='text-cyan'>{linkOrder}</span> {link}
              </Link>
            </li>
          ))}

          <li className='px-4 cursor-pointer capitalize py-6 text-2xl items-center my-5'>
            <a
              href='/resume.pdf'
              className='text-cyan border border-cyan rounded-md py-3 px-6 hover:scale-105 duration-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
