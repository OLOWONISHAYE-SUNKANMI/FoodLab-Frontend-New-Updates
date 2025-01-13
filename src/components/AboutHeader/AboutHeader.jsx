import React from 'react';
import './AboutHeader.css'; 

const AboutHeader = () => {
  return (
    <div className='h-[50vw] md:h-[34vw] my-7 mx-auto bg-[url("/about_header.png")] bg-no-repeat bg-cover bg-[length:100%_160%] relative rounded-lg overflow-hidden shadow-md header-container'>
      <div className='p-5 md:p-8 lg:p-12 mt-10 animate-fadeIn header-content'>
        <h3 className='text-white text-lg md:text-xl lg:text-2xl tracking-widest header-title'>ABOUT US</h3>
        <h4 className='text-white text-sm md:text-base lg:text-lg font-medium mt-5 md:mt-3 lg:mt-5 md:mr-[30%] lg:mr-[40%] header-text'>
          Whether you’re here for a quick bite, a celebration, or just to unwind,
          our welcoming atmosphere and attentive team are here to make every visit memorable.
        </h4>
        <button className='px-6 md:px-8 lg:px-12 py-2 md:py-3 lg:py-5 border-none text-blue-500 mt-5 md:mt-7 text-xs md:text-sm lg:text-base rounded-md shadow-md transition duration-300 ease-in-out bg-white hover:text-white hover:bg-blue-500 header-button'>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default AboutHeader;