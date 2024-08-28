import React, { useState } from 'react';
import headerlogo from '../../assets/images/headerlogo.svg';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons from react-icons
import { navLinks } from '../constants';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerlogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className={`flex flex-1 justify-center items-center gap-16 max-lg:hidden`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          {isMobileMenuOpen ? (
            <FaTimes 
              size={25} 
              onClick={toggleMobileMenu} 
              className="cursor-pointer"
            />
          ) : (
            <FaBars 
              size={25} 
              onClick={toggleMobileMenu} 
              className="cursor-pointer"
            />
          )}
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className='absolute top-16 right-0 bg-white shadow-lg p-8 flex flex-col gap-4 max-lg:block lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                className='font-montserrat leading-normal text-lg text-slate-gray'
                onClick={() => setIsMobileMenuOpen(false)}  // Close menu on link click
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
