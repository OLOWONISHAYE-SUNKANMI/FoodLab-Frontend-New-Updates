import React from 'react';
import './ContactHeader.css';

const Header = () => {
  return (
    <div className='h-[50vw] sm:h-[40vw] md:h-[34vw] my-7 mx-auto bg-[url("/Contact_Header.png")] bg-no-repeat bg-cover bg-[length:100%_160%] relative rounded-lg overflow-hidden shadow-md header-container'>
      <div className='p-5 sm:p-8 md:p-12 mt-10 animate-fadeIn header-content'>
        <h2 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest header-title'>CONTACT US</h2>
        <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-5 sm:mt-6 md:mt-7 lg:mt-8 sm:mr-[20%] md:mr-[30%] lg:mr-[40%] header-text'>
          We are always here to help you. Send us a message.
        </p>
        <button className='px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 bg-white text-blue-500 mt-5 sm:mt-6 md:mt-7 lg:mt-8 text-sm sm:text-base md:text-lg lg:text-xl rounded-md shadow-md transition duration-300 ease-in-out hover:text-white hover:bg-blue-500 header-button'>
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Header;