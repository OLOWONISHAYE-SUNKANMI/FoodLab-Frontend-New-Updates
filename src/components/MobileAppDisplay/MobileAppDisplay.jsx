import React from 'react';
import 'material-design-icons/iconfont/material-icons.css';

import googlePlayImage from '../../assets/play_store.png';
import appStoreImage from '../../assets/app_store.png';
import mockupImage from '../../assets/iphone.png';

const MobileAppDisplay = () => {
  return (
    <div className='w-full bg-blue-900 h-auto md:h-[60vh] p-10 md:p-12 rounded-lg shadow-lg'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='text-center md:text-left'>
          <h2 className='text-white mt-8 text-3xl md:text-4xl mb-5'>Download our Mobile App</h2>
          <p className='text-white text-lg md:text-xl mb-5'>Get food delivered to your doorstep with our mobile app</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <img src={googlePlayImage} alt='Google Play' className='w-36 h-12 cursor-pointer' />
            <img src={appStoreImage} alt='App Store' className='w-36 h-12 cursor-pointer' />
          </div>
        </div>
        <div className='mt-10 md:mt-0'>
          <img src={mockupImage} alt='Mobile App Mockup' className='w-64 md:w-72' />
        </div>
      </div>
    </div>
  );
}

export default MobileAppDisplay;