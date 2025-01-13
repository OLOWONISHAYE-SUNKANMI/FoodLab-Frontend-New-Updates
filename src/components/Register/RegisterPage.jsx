import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SignUpImage from '../../assets/SignupPage.png';
import './RegisterPage.css'; 
import toast from 'react-hot-toast';
import { API_BASE_URL } from '../../env';


const RegisterPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [loading, setLoading] = useState(false); 
  const [otpLoading, setOtpLoading] = useState(false); 

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/register`, {
        firstName,
        lastName,
        phone: phoneNumber,
        email,
        password,
      });
      setLoading(false);
      setShowVerification(true);
      toast.success('Registration successful. Check your email for OTP.');
    } catch (err) {
      setLoading(false);
      setError('Registration failed. Please try again.');
      toast.error(err.response.data.message);
    }
  };

const handleOtpVerification = async (e) => {
  e.preventDefault();
  if (!otp) {
    setOtpError('Please enter OTP');
    return;
  }
  setOtpLoading(true);
  try {
    // Send OTP verification request
    const response = await axios.post(`${API_BASE_URL}/api/users/verify-otp`, {
      email,
      otp,
    });
    setOtpLoading(false);

    if (response.data.message && response.data.message.includes('Account verified successfully')) {
      toast.success('Email verified successfully!');
      
      const { token } = response.data;
      localStorage.setItem('foodLabToken', token);

      navigate('/menu');
    } else {
      setOtpError('Invalid OTP');
      toast.error('Invalid OTP');
    }
  } catch (err) {
    setOtpLoading(false);
    setOtpError('OTP verification failed. Please try again.');
    toast.error(err.response.data.message);
  }
};


return (
  <div className="register-page-container">
    <div className="register-form transition-transform transform">
      {!showVerification ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Register</h1>
          <form className="space-y-4" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className={`w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>
          <p className="mt-4">
            Already have an account?{' '}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate('/login')}
            >
              Login
            </span>
          </p>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-4">Account Verification</h2>
          <p>Check Email for OTP</p>
          <form className="space-y-4 mt-4" onSubmit={handleOtpVerification}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className={`w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${otpLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={otpLoading}
            >
              {otpLoading ? 'Verifying...' : 'Verify'}
            </button>
          </form>
        </>
      )}
    </div>
    <div className="register-image hidden md:block">
      <img src={SignUpImage} alt="SignUpPage" className="rounded-2xl" />
    </div>
  </div>
);

};

export default RegisterPage;
