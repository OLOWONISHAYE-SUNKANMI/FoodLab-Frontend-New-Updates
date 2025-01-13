import React from 'react';

const ContactBody = () => {
  return (
    <div className='w-full flex justify-center items-center p-8 md:p-16'>
      <form className='w-full md:w-[600px] flex flex-col items-center'>
        <input
          type='text'
          placeholder='Name'
          className='w-full p-2 border border-gray-300 rounded-md mb-4'
        />
        <input
          type='email'
          placeholder='Email'
          className='w-full p-2 border border-gray-300 rounded-md mb-4'
        />
        <input
          type='text'
          placeholder='Subject'
          className='w-full p-2 border border-gray-300 rounded-md mb-4'
        />
        <textarea
          placeholder='Message'
          className='w-full h-48 p-2 border border-gray-300 rounded-md mb-4'
        ></textarea>
        <button
          type='submit'
          className='w-full p-2 bg-gray-200 border border-gray-300 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300'
        >
          Send a message
        </button>
      </form>
    </div>
  );
};

export default ContactBody;