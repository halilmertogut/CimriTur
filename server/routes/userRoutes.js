const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { sendVerificationEmail } = require('../services/emailService'); // Ensure this module is correctly implemented as previously discussed


router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, emailOrPhone, password, dateOfBirth, agreeToTerms, rememberMe } = req.body;

        if (!agreeToTerms) {
            return res.status(400).send('You must agree to the terms.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationCode = Math.random().toString(36).substring(2, 15);
        const existingUser = await User.findOne({ emailOrPhone: emailOrPhone });
        if (existingUser) {
            return res.status(409).send("Telefon numarası veya e-mail'e ait bir hesap bulunmaktadır!" );
        }
        const user = new User({
            firstName,
            lastName,
            emailOrPhone,
            password: hashedPassword,
            dateOfBirth,
            agreeToTerms,
            rememberMe,
            verificationCode,
            isVerified: false
        });

        await user.save();
        await sendVerificationEmail(emailOrPhone, verificationCode); 

        res.status(201).send('Hesabınız başarı ile oluşturuldu! Lütfen e-mail hesabınıza gelen kodu bir sonraki sayfada giriniz.');
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

module.exports = router;
