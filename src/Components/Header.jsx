import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 border-b ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl border-black border-b-1">
            <a href="#" className="flex items-center">
              <img src="/logo.png" className="mr-3 h-8 sm:h-16" alt="Presentix Logo" />
            </a>
            {/* <div className="flex items-center lg:order-2">
              <a
                href="/login"
                className="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-gray-800 "
              >
                Log in
              </a>
              <a href="#" >
                <button className='btn'>Get started</button>
              </a>
            </div> */}
            <div className="lg:hidden">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg className={`hidden w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`${
                isMobileMenuOpen ? 'block' : 'hidden'
              } lg:flex justify-between items-center w-full lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
  {[
    ['Home', '/'],
    ['About Us', '/about_us'],
    ['How it works', '/how_it_works'],
  ].map(([title, url]) => (
    <NavLink key={title} exact to={url} activeClassName="active" className="menu-item ">
      {title}
    </NavLink>
  ))}
</ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
