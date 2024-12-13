import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [accountType, setAccountType] = useState('');
  const [businessFieldsVisible, setBusinessFieldsVisible] = useState(false);
  const [organizationFieldsVisible, setOrganizationFieldsVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessRegNumber, setBusinessRegNumber] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        password,
        email,
        fullName,
        phoneNumber,
        accountType,
        businessName,
        businessRegNumber,
        organizationName,
        registrationNumber,
      });
      alert('Registration successful! Please check your email for the OTP.');
      setOtpSent(true);
    } catch (error) {
      alert('Registration failed: ' + (error.response ? error.response.data : 'An unexpected error occurred'));
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/verify-otp', { email, otp });
      alert('User  registered successfully!');
      navigate('/login'); // Redirect to the login page after successful registration
    } catch (error) {
      alert('OTP verification failed: ' + (error.response ? error.response.data : 'An unexpected error occurred'));
    }
  };

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
    setBusinessFieldsVisible(e.target.value === 'business');
    setOrganizationFieldsVisible(e.target.value === 'organization');
  };

  return (
    <div className="font-roboto bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              alt="Brand logo with a green leaf and the text 'Carbon Offset Platform'"
              className="h-10 w-10"
              src="https://storage.googleapis.com/a1aa/image/mIBIVVVbV1rBIp78oUOTJ0n0g3Sn8pSXey8xF0wqejaRUh5TA.jpg"
            />
            <span className="ml-2 text-xl font-bold text-green-600">
              Carbon Offset Platform
            </span>
          </div>
          <nav className="space-x-4">
            <Link className="text-gray-700 hover:text-green-600" to="/">Home</Link>
            <Link className="text-gray-700 hover:text-green-600" to="/">Calculator</Link>
            <Link className="text-gray-700 hover:text-green-600" to="/register">Sign Up</Link>
            <Link className="text-gray-700 hover:text-green-600" to="/login">Login</Link>
          </nav>
          <Link className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700" to="/register">Get Started</Link>
        </div>
      </header>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-4">Create Your Account</h1>
          <p className="mb-6">Select the type of account and fill in the required information to get started.</p>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Account Type</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="business"
                name="accountType"
                value="business"
                className="mr-2"
                onChange={handleAccountTypeChange}
              />
              <label htmlFor="business" className="mr-4">Business Account</label>
              <input
                type="radio"
                id="organization"
                name="accountType"
                value="organization"
                className="mr-2"
                onChange={handleAccountTypeChange}
              />
              <label htmlFor="organization">Organization Account</label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              className="w-full p-2 border border-gray-300 rounded"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number (Optional)</label>
            <input
              type="text"
              id="phoneNumber"
              className="w-full p-2 border border-gray-300 rounded"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input type="checkbox" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-gray-700">I agree to the <a href="#" className="text-blue-500">Terms & Conditions</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.</label>
          </div>

          {businessFieldsVisible && (
            <div id="businessFields">
              <div className="mb-4">
                <label htmlFor="businessName" className="block text-gray-700 font-bold mb-2">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="businessRegNumber" className="block text-gray-700 font-bold mb-2">Business Registration Number</label>
                <input
                  type="text"
                  id="businessRegNumber"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={businessRegNumber}
                  onChange={(e) => setBusinessRegNumber(e.target.value)}
                />
              </div>
            </div>
          )}

          {organizationFieldsVisible && (
            <div id="organizationFields">
              <div className="mb-4">
                <label htmlFor="organizationName" className="block text-gray-700 font-bold mb-2">Organization Name</label>
                <input
                  type="text"
                  id="organizationName"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="registrationNumber" className="block text-gray-700 font-bold mb-2">Registration Number</label>
                <input
                  type="text"
                  id="registrationNumber"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                />
              </div>
            </div>
          )}

          {!otpSent ? (
            <button className="w-full bg-blue-500 text-white p-2 rounded-lg font-bold" onClick={handleRegister}>
              Create Account
            </button>
          ) : (
            <form onSubmit={handleVerifyOtp}>
              <h2 className="text-xl font-bold mb-4">Verify OTP</h2>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg font-bold">
                Verify OTP
              </button>
            </form>
          )}
          <p className="mt-4 text-center">Already have an account? <Link to="/login" className="text-blue-500">Log in here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;