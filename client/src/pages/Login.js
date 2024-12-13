import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // Optional: Remember Me functionality

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login data:', { email, password });
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const token = response.data.token;
      const accountType = response.data.accountType; // Get account type from the response
      const businessName=response.data.businessName;
      onLogin(token);
      alert('Login successful!');

      // Redirect based on account type
      if (accountType === 'business') {
        navigate('/business-dashboard', { state: { businessName }}); // Redirect to Business Dashboard
      } else if (accountType === 'organization') {
        navigate('/organization-dashboard'); // Redirect to Organization Dashboard
      } else {
        navigate('/'); // Redirect to home or a default page
      }
    } catch (error) {
      alert('Login failed: ' + (error.response ? error.response.data : 'An unexpected error occurred'));
    }
  };

  return (
    <div className="font-roboto">
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
            <Link className="text-gray-700 hover:text-green-600" to="/">
              Home
            </Link>
            <Link className="text-gray-700 hover:text-green-600" to="/">
              Calculator
            </Link>
            <Link className="text-gray-700 hover:text-green-600" to="/register">
              Sign Up
            </Link>
            <Link className="text-gray-700 hover:text-green-600" to="/login">
              Login
            </Link>
          </nav>
          <Link className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700" to="/register">
            Get Started
          </Link>
        </div>
      </header>
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-32">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Login</h1>
        <p className="text-gray-700 mb-6">Enter your credentials to access your account.</p>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="mr-2"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe" className="text-gray-700">Remember Me</label>
            </div>
            <a href="#" className="text-blue-500 hover:text-green-600">Forgot Password?</a>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">Login</button>
            <Link className="text-blue-500 hover:text-green-600" to="/register">
              Don't have an account? Register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;