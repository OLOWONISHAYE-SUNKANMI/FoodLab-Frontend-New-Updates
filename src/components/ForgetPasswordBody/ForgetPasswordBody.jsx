import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ForgetPasswordBody = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Add your forgot password logic here
    if (email === 'test@example.com') { // Example condition for existing email
      toast.success('A password reset link has been sent.');
    } else {
      toast.error('Email does not exist.');
    }
  };

  return (
    <div className="flex justify-center items-center p-4 md:p-16">
      <div className="max-w-md w-full">
        <h1 className="text-2xl md:text-3xl  text-center font-bold mb-4">Forgot Password</h1>
        <form className="space-y-4" onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordBody;