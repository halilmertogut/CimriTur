const express = require('express');
const router = express.Router();
const User = require('../models/User'); // assuming User model is properly defined
const { sendVerificationEmail } = require('../services/emailService'); // your email service function

router.post('/resend-code', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send("Böyle bir kullanıcı yok!");

        }

        const newVerificationCode = Math.random().toString(36).substring(2, 15);
        const newExpiration = new Date(Date.now() + 30 * 60000); // 30 minutes from now

        await User.updateOne({ _id: user._id }, {
            verificationCode: newVerificationCode,
            codeExpiration: newExpiration,
            verificationCodeAttempts: 0 // Reset attempts
        });

        await sendVerificationEmail(user.emailOrPhone, newVerificationCode, user.firstName, user.lastName);

        res.status(400).send("A new verification code has been sent.");

    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to resend verification code.' );
    }
});

module.exports = router;
