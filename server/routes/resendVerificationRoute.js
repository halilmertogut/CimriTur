const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Make sure this path matches your User model file
const { sendVerificationEmail } = require('../services/emailService'); // Ensure this is correctly linked to your email service logic

router.post('/resend-code', async (req, res) => {
    const { email, firstName, lastName } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send("No user found with that email.");
        }

        const newVerificationCode = Math.random().toString(36).substring(2, 15);

        await User.updateOne({ _id: user._id }, {
            verificationCode: newVerificationCode,
            verificationCodeAttempts: 0 
        });

        // Resend the verification email
        await sendVerificationEmail(email, newVerificationCode, firstName, lastName);

        res.status(200).send("Yeni kod gönderildi!");
    } catch (error) {
        console.error(error);
        res.status(500).send('Kod tekrar gönderilemedi!');
    }
});

module.exports = router;
