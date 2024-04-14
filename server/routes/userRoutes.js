const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { sendVerificationEmail } = require('../services/emailService'); // Ensure this module is correctly implemented as previously discussed

router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, emailOrPhone, password, dateOfBirth, agreeToTerms, rememberMe } = req.body;

        if (!agreeToTerms) {
            return res.status(400).json({ message: 'You must agree to the terms.' });
        }

        const existingUser = await User.findOne({ emailOrPhone: emailOrPhone });
        if (existingUser) {
            return res.status(409).json({ message: 'An account with the provided phone number or email already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationCode = Math.random().toString(36).substring(2, 15);
        const codeExpiration = new Date(new Date().getTime() + 30*60000); // Code expires in 30 minutes

        const user = new User({
            firstName,
            lastName,
            emailOrPhone,
            password: hashedPassword,
            dateOfBirth,
            agreeToTerms,
            rememberMe,
            verificationCode,
            isVerified: false,
            codeExpiration  // Include expiration date for the verification code
        });

        await user.save();
        await sendVerificationEmail(emailOrPhone, verificationCode, firstName, lastName);

        res.status(201).json({ message: 'Your account has been created successfully! Please enter the verification code sent to your email in the next step.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering new user: ' + error.message });
    }
});

module.exports = router;
