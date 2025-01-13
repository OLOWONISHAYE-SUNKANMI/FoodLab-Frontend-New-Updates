import React from 'react';
import logo from '../../assets/logo.png';
import 'material-design-icons/iconfont/material-icons.css';
import Facebook from '../../assets/facebook.png';
import Social_Media from '../../assets/social-media.png';
import Instagram from '../../assets/instagram.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <img src={logo} alt='' className="w-36 mb-5 md:mb-0" />

        <div className='mb-5 md:mb-0 text-center md:text-left'>
          <h2 className="text-blue-500 text-xl mb-5">Quick Links</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-blue-500">Home</li>
            <li className="cursor-pointer hover:text-blue-500">About Us</li>
            <li className="cursor-pointer hover:text-blue-500">Menu</li>
            <li className="cursor-pointer hover:text-blue-500">Mobile Apps</li>
            <li className="cursor-pointer hover:text-blue-500">Contact</li>
          </ul>
        </div>

        <div className='text-center md:text-left'>
          <h2 className="text-blue-500 text-xl mb-5">Sign up for exclusive deals and updates!</h2>
          <form className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-2">
            <input type='email' placeholder='Enter your email address' className="border-2 border-blue-500 w-full md:w-auto px-4 py-2 rounded-full" />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out hover:bg-black hover:text-white">Sign Up</button>
          </form>

          <div className='flex justify-center md:justify-start space-x-4 mt-5'>
            <img src={Facebook} alt='' className="w-8 h-8 cursor-pointer" />
            <img src={Social_Media} alt='' className="w-8 h-8 cursor-pointer" />
            <img src={Instagram} alt='' className="w-8 h-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;