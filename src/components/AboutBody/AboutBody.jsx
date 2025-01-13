import React from 'react';
import Delivery from '../../assets/Delivery.png';
import 'material-design-icons/iconfont/material-icons.css';

const AboutBody = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-5 md:p-10'>
      <div className='p-5 md:p-10'>
        <div className='flex justify-center items-center'>
          <h2 className='text-2xl text-blue-500 font-bold mb-5'>WHY CHOOSE US</h2>
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='my-5'>
            <h3 className='text-lg text-blue-500 font-bold mb-5'>Endless Choices</h3>
            <li className='list-none text-sm'>Browse and order from multiple restaurants in your area, all through a single app.</li>
          </div>
          <div className='my-5'>
            <h3 className='text-lg text-blue-500 font-bold mb-5'>Seamless Experience</h3>
            <li className='list-none text-sm'>Enjoy fast, easy ordering with real-time updates and quick delivery.</li>
          </div>
          <div className='my-5'>
            <h3 className='text-lg text-blue-500 font-bold mb-5'>Curated Selections</h3>
            <li className='list-none text-sm'>We partner with top-rated restaurants to ensure you get only the best.</li>
          </div>
          <div className='my-5'>
            <h3 className='text-lg text-blue-500 font-bold mb-5'>24/7 Support</h3>
            <li className='list-none text-sm'>Our customer service team is always ready to help with any questions or concerns.</li>
          </div>
        </ul>
      </div>
      <div className='flex justify-center items-center mt-5 md:mt-0'>
        <img src={Delivery} alt="delivery" className='w-full md:w-96 h-full object-cover' />
      </div>
    </div>
  );
}

export default AboutBody;