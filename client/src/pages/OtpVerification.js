import React, { useState } from 'react';
import axios from 'axios';

const OtpVerification = ({ email, onVerified }) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/verify-otp', { email, otp });
      onVerified(); // Call the function passed as prop to indicate success
    } catch (error) {
      alert('OTP verification failed: ' + error.response.data);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Enter OTP</h2>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Verify OTP</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  form: {
    background: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  input: {
    display: 'block',
    width: '100%',
    padding : '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default OtpVerification;