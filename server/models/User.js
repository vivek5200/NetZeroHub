const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  accountType: { type: String, required: true },
  businessName: { type: String, required: false },
  businessRegNumber: { type: String, required: false },
  organizationName: { type: String, required: false },
  registrationNumber: { type: String, required: false },
});

const User = mongoose.model('User ', userSchema);
module.exports = User;