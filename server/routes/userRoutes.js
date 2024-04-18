const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // JSON Web Token işlemleri için
const { sendVerificationEmail } = require('../services/emailService'); // Ensure this module is correctly implemented as previously discussed

router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password, dateOfBirth, agreeToTerms } = req.body;

        if (!agreeToTerms) {
            return res.status(400).send( 'You must agree to the terms.' );
        }

        const existingUserviaPhone = await User.findOne({ phone: phone });
        const existingUserviaMail = await User.findOne({ email: email });

        if (existingUserviaPhone) {
            return res.status(409).send('An account with the provided phone number already exists.' );
            
        } else if(existingUserviaMail) {
            return res.status(409).send('An account with the provided email already exists.' );

        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationCode = Math.random().toString(36).substring(2, 15);
        const codeExpiration = new Date(new Date().getTime() + 30*60000); // Code expires in 30 minutes

        const user = new User({
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword,
            dateOfBirth,
            agreeToTerms,
            verificationCode,
            isVerified: false,
            codeExpiration  // Include expiration date for the verification code
        });

        await user.save();
        await sendVerificationEmail(email, verificationCode, firstName, lastName);

        res.status(201).send( 'Your account has been created successfully! Please enter the verification code sent to your email in the next step.' );
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering new user: ' + error.message );
    }
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Kullanıcıyı e-mail üzerinden bul
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Kullanıcı bulunamadı!" });
        }

        // Parolayı karşılaştır
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Kullanıcı adı veya şifre hatalı!" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({
            message: "Başarıyla giriş yapıldı!",
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = router;
