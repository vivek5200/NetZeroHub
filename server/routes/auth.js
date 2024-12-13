const express = require('express');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const otpStore = {};
const tempUserStore = {};

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email }, // Removed username from the token payload
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

router.post('/register', async (req, res) => {
  const { password, email, fullName, phoneNumber, accountType, businessName, businessRegNumber, organizationName, registrationNumber } = req.body;

  try {
    const existingUser  = await User.findOne({ email }); // Check for existing user by email
    if (existingUser ) {
      return res.status(400).send('User  already exists');
    }

    const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
    otpStore[email] = otp;
    tempUserStore[email] = { password, email, fullName, phoneNumber, accountType, businessName, businessRegNumber, organizationName, registrationNumber };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error('Error sending OTP:', error);
        return res.status(500).send('Error sending OTP');
      }
      res.status(200).send('OTP sent to your email!');
    });
  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).send('Internal server error');
  }
});

router.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  try {
    if (otpStore[email] && otpStore[email] === otp) {
      delete otpStore[email];

      const hashedPassword = await bcrypt.hash(tempUserStore[email].password, 10);
      const newUser  = new User({
        password: hashedPassword,
        email: tempUserStore[email].email,
        fullName: tempUserStore[email].fullName,
        phoneNumber: tempUserStore[email].phoneNumber,
        accountType: tempUserStore[email].accountType,
        businessName: tempUserStore[email].businessName,
        businessRegNumber: tempUserStore[email].businessRegNumber,
        organizationName: tempUserStore[email].organizationName,
        registrationNumber: tempUserStore[email].registrationNumber,
      });

      await newUser .save();
      delete tempUserStore[email];
      return res.status(200).send('User  registered successfully!');
    } else {
      return res.status(400).send('Invalid OTP');
    }
  } catch (error) {
    console.error('Error in OTP verification:', error);
    res.status(500).send('Internal server error');
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user); // Ensure this function includes necessary claims
    res.status(200).json({
      token,
      accountType: user.accountType, // Include account type
      businessName:user.businessName
    });
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;