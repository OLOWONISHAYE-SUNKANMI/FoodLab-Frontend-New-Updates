import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_2.png';
import profile_icon from '../../assets/profile_icon.png';
import GoogleMapComponent from '../GoogleMapComponent/GoogleMapComponent';

const RestaurantNav = () => {
  const [location, setLocation] = useState('LASU Epe Campus');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handlePlaceSelected = (place) => {
    const address = place.formatted_address;
    setLocation(address);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-white border-b border-gray-300 md:flex-row">
        <div className="logo cursor-pointer" onClick={handleLogoClick}>
          <img src={logo} alt="FoodLab" className="h-14" />
        </div>
        <div className="delivery-location text-lg hidden md:block">
          🚲 Delivering to <span className="location text-blue-500 font-bold">{location}</span>
        </div>
        <div className="nav-icons flex items-center hidden md:flex">
          <div className="google-map-input mr-5">
            <GoogleMapComponent onPlaceSelected={handlePlaceSelected} />
          </div>
          <button className="cart-btn bg-none border-none text-2xl cursor-pointer mr-5">🛒</button>
          <div className="profile-pic">
            <img src={profile_icon} alt="Profile" className="h-10 w-10 rounded-full" />
          </div>
        </div>
        <button className="menu-btn md:hidden text-2xl" onClick={toggleSidebar}>
          ☰
        </button>
      </nav>
      {isSidebarOpen && (
        <div className="sidebar fixed top-0 left-0 w-3/4 h-full bg-white border-r border-gray-300 z-50 md:hidden">
          <div className="sidebar-content p-4">
            <button className="close-btn text-2xl mb-4" onClick={toggleSidebar}>
              ✕
            </button>
            <div className="delivery-location text-lg mb-4">
              🚲 Delivering to <span className="location text-blue-500 font-bold">{location}</span>
            </div>
            <div className="google-map-input mb-4">
              <GoogleMapComponent onPlaceSelected={handlePlaceSelected} />
            </div>
            <button className="cart-btn bg-none border-none text-2xl cursor-pointer mb-4">🛒</button>
            <div className="profile-pic mb-4">
              <img src={profile_icon} alt="Profile" className="h-10 w-10 rounded-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantNav;