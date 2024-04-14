// routes/verificationRoute.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/verify', async (req, res) => {
    const { email, code } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).send( 'User not found.' );
        }

        if (new Date() > new Date(user.codeExpiration)) {
            return res.status(410).json( { message : 'Verification code has expired.'} );
        }

        if (user.verificationCodeAttempts >= 3) {
            return res.status(429).json( { message: 'Maximum verification attempts exceeded.' } );
        }

        if (user.verificationCode !== code) {
            await User.updateOne({ _id: user._id }, { $inc: { verificationCodeAttempts: 1 } });
            return res.status(400).json({ message: 'Incorrect verification code.' });
        }

        await User.updateOne({ _id: user._id }, { isVerified: true, verificationCode: null, verificationCodeAttempts: 0, codeExpiration: null });
        res.json({  message : 'Verification successful!', success: true });
    } catch (error) {
        console.error(error);
        res.status(500).send( 'Internal server error.' );
    }
});


module.exports = router;
