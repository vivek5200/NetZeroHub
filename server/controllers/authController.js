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