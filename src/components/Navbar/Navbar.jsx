import React, { useEffect, useState } from 'react';
import { assets } from "../../assets/assets";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the custom CSS for animation
import Modal from 'react-modal';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false); // State to handle modal visibility
  const [searchQuery, setSearchQuery] = useState(''); // State to store search input

  useEffect(() => {
    const token = localStorage.getItem('foodLabToken');
    setIsSignedIn(!!token);
  }, []);

  const handleMenuClick = (path) => {
    setMenu(path);
    navigate(path);
    setIsMenuOpen(false); // Close the menu after navigation
  };

  const handleCartClick = () => {
    setMenu(""); // Clear the active menu
    navigate('/cart');
    setIsMenuOpen(false); // Close the menu after navigation
  };

  const handleSignInClick = () => {
    setIsMenuOpen(false); // Close the menu after navigation
    setIsNavVisible(false); // Hide the navigation

    if (isSignedIn) {
      localStorage.removeItem('foodLabToken');
      setIsSignedIn(false);
      // alert('You have been logged out.');
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  const handleSearchClick = () => {
    if (isSignedIn) {
      // Open the search modal if the user is signed in
      setIsSearchModalOpen(true);
    } else {
      // Navigate to the login page if not signed in
      navigate('/login');
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value); // Update the search input state
  };

  const handleSearchSubmit = () => {
    console.log('Searching for:', searchQuery);
    // Close the modal after search
    setIsSearchModalOpen(false);
  };

  if (!isNavVisible) {
    return null; 
  }

  return (
    <div className='flex justify-between items-center py-5 px-4 md:px-8'>
      <img src={assets.logo} alt="" className="w-36 logo" />
      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex flex-grow justify-center">
        <ul className="flex list-none gap-5 text-gray-700 text-lg">
          <li onClick={() => handleMenuClick("/")} className={`cursor-pointer ${menu === "/" ? "active" : ""}`}>
            <Link to="/" className="no-underline">Home</Link>
          </li>
          <li onClick={() => handleMenuClick("/about")} className={`cursor-pointer ${menu === "/about" ? "active" : ""}`}>
            <Link to="/about" className="no-underline">About</Link>
          </li>
          <li onClick={() => handleMenMenuClick("/menu")} className={`cursor-pointer ${menu === "/menu" ? "active" : ""}`}>
            <Link to="/menu" className="no-underline">Menu</Link>
          </li>
          <li onClick={() => handleMenuClick("/contact-us")} className={`cursor-pointer ${menu === "/contact-us" ? "active" : ""}`}>
            <Link to="/contact-us" className="no-underline">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex items-center gap-5">
        <img src={assets.search_icon} alt="Search" className="w-6 h-6" onClick={handleSearchClick} />
        <div className="relative cursor-pointer" onClick={handleCartClick}>
          <img src={assets.basket_icon} alt="Basket" className="w-6 h-6" />
          <div className="absolute w-2.5 h-2.5 bg-blue-500 rounded-full top-0 right-0"></div>
        </div>
        <button onClick={handleSignInClick} className="bg-transparent text-gray-700 border border-blue-500 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
          {isSignedIn ? 'Log Out' : 'Sign In'}
        </button>
      </div>
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="flex flex-col h-full p-5 bg-white w-64">
          <button onClick={() => setIsMenuOpen(false)} className="self-end text-gray-700 focus:outline-none mb-5">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="flex flex-col gap-5 text-gray-700 text-lg">
            <li onClick={() => handleMenuClick("/")} className={`cursor-pointer ${menu === "/" ? "active" : ""}`}>
              <Link to="/" className="no-underline">Home</Link>
            </li>
            <li onClick={() => handleMenuClick("/about")} className={`cursor-pointer ${menu === "/about" ? "active" : ""}`}>
              <Link to="/about" className="no-underline">About</Link>
            </li>
            <li onClick={() => handleMenuClick("/menu")} className={`cursor-pointer ${menu === "/menu" ? "active" : ""}`}>
              <Link to="/menu" className="no-underline">Menu</Link>
            </li>
            <li onClick={() => handleMenuClick("/contact-us")} className={`cursor-pointer ${menu === "/contact-us" ? "active" : ""}`}>
              <Link to="/contact-us" className="no-underline">Contact Us</Link>
            </li>
            <li className="flex items-center gap-5 mt-5">
              <img src={assets.search_icon} alt="Search" className="w-6 h-6" />
              <div className="relative cursor-pointer" onClick={handleCartClick}>
                <img src={assets.basket_icon} alt="Basket" className="w-6 h-6" />
                <div className="absolute w-2.5 h-2.5 bg-blue-500 rounded-full top-0 right-0"></div>
              </div>
              <button onClick={handleSignInClick} className="bg-transparent text-gray-700 border border-blue-500 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal for search */}
      <Modal
        isOpen={isSearchModalOpen}
        onRequestClose={() => setIsSearchModalOpen(false)}
        contentLabel="Search Menu"
      >
        <div>
          <h2 className="text-lg mb-4">Search for Menu Items</h2>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="border p-2 w-full mb-4"
            placeholder="Search menu"
          />
          <button onClick={handleSearchSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Search
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
