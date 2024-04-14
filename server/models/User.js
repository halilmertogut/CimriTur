const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailOrPhone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    agreeToTerms: { type: Boolean, required: true },
    verificationCode: { type: String, required: true },
    isVerified: { type: Boolean, default: false }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
