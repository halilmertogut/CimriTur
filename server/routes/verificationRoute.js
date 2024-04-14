const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST route to verify user account
router.post('/verify', async (req, res) => {
    const { emailOrPhone, verificationCode } = req.body;

    try {
        const user = await User.findOne({
            emailOrPhone,
            verificationCode
        });

        // Check if user exists and verification code matches
        if (!user) {
            return res.status(400).send('Verification failed. Invalid code or email.');
        }

        // Check if the user has already been verified
        if (user.isVerified) {
            return res.status(400).send('Account already verified.');
        }

        // Set the user as verified
        user.isVerified = true;
        user.verificationCode = null; // Optionally clear the verification code
        await user.save();

        res.send('Account verified successfully.');
    } catch (error) {
        console.error('Verification error:', error);
        res.status(500).send('Error during the verification process.');
    }
});

module.exports = router;
