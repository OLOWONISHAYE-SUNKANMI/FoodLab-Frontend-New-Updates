import React from 'react';

const MenuHeader = () => {
  const handleOrderNowClick = () => {
    const scrollOffset = 600; 
    window.scrollTo({
      top: window.scrollY + scrollOffset,
      behavior: 'smooth',
    });
  };

  return (
    <div className='h-[34vw] my-7 mx-auto bg-[url("/menu_header.png")] bg-no-repeat bg-cover bg-[length:100%_160%] relative rounded-lg overflow-hidden shadow-md header-container'>
      <div className='p-5 md:p-8 lg:p-12 mt-10 animate-fadeIn header-content'>
        <h3 className='text-white text-lg md:text-xl lg:text-2xl tracking-widest header-title'>OUR MENU</h3>
        <p className='text-white text-base md:text-lg lg:text-xl font-medium mt-5 md:mt-3 lg:mt-5 md:mr-[20%] lg:mr-[30%] header-text'>
          Check out our various restaurants for the right taste.
        </p>
        <button
          className='px-6 md:px-8 lg:px-12 py-2 md:py-3 lg:py-5 bg-white text-blue-500 mt-5 md:mt-7 text-sm md:text-base lg:text-lg rounded-md shadow-md transition duration-300 ease-in-out hover:text-white hover:bg-blue-500 header-button '
          onClick={handleOrderNowClick}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default MenuHeader;
