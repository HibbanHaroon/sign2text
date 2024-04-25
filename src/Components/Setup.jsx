import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Setup = () => {
  return (
    <div>
      <Header />
      <div className='h-dvh flex flex-col justify-center items-center'>
        <div className='mx-24'>
          <div className='md:w-1/2 flex max-sm:gap-11 md:flex-row items-center'>
            <a className='main_pg_link h-20 mb-4 md:mr-11' href="#"><span>Static</span></a>
            <a className='main_pg_link h-20 mb-4' href="#"><span>Dynamic</span></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Setup;
