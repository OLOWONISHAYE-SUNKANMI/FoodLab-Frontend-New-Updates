import React from 'react';
import './Header.css';  // import css for media query

const Header = () => {
  return (
    <div className='h-[40vw] my-7 mx-auto bg-[url("/header_img.png")] bg-no-repeat bg-cover bg-[length:100%_160%] relative rounded-lg overflow-hidden shadow-md header-container'>
      <div className='p-5 md:p-8 lg:p-12 mt-10 animate-fadeIn header-content'>
      <h2 className="text-white text-base md:text-lg lg:text-xl tracking-widest header-title">SPECIALS</h2>
        <p className="text-white text-base md:text-sm lg:text-xl font-medium mt-4 md:mt-3 lg:mt-5 sm:mr-[60%] md:mr-[40%] lg:mr-[40%] header-text">
          Use the code 'CDE45FLB' and get 30% off your next order
        </p>
        <button className="px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 bg-white text-blue-500 mt-5 md:mt-7 text-xs md:text-sm lg:text-base rounded-md shadow-md transition duration-300 ease-in-out hover:text-white hover:bg-blue-500">
          Order now
        </button>

      </div>
    </div>
  );
}

export default Header;