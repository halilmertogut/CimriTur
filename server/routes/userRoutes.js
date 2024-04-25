const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/authMiddleware'); // Ensure this path is correct
const { sendVerificationEmail } = require('../services/emailService');

router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password, dateOfBirth, agreeToTerms } = req.body;

        if (!agreeToTerms) {
            return res.status(400).send('You must agree to the terms.');
        }

        const existingUserViaPhone = await User.findOne({ phone });
        const existingUserViaEmail = await User.findOne({ email });

        if (existingUserViaPhone) {
            return res.status(409).send('An account with the provided phone number already exists.');
        } else if (existingUserViaEmail) {
            return res.status(409).send('An account with the provided email already exists.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationCode = Math.random().toString(36).substring(2, 15);

        const user = new User({
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword,
            dateOfBirth,
            agreeToTerms,
            verificationCode,
            isVerified: false
        });

        await user.save();
        await sendVerificationEmail(email, verificationCode, firstName, lastName);

        res.status(201).send('Your account has been created successfully! Please enter the verification code sent to your email in the next step.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering new user: ' + error.message);
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({
            message: "Successfully logged in!",
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

// Token validation route
router.get('/check-token', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({
            message: "Token is valid",
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
        res.status(500).json({ message: "Server error during token check" });
    }
});

router.post('/update-contact-info', authenticateToken, async (req, res) => {
    const { email, phone, currentPassword } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(403).json({ message: "Current password is incorrect" });
        }

        user.email = email;
        user.phone = phone;
        await user.save();

        res.json({
            message: "Contact info updated",
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone
            }
        });    
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Update user's password
router.post('/change-password', authenticateToken, async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(403).json({ message: "Current password is incorrect" });
        }

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        res.json({ message: 'Password changed successfully!' });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


module.exports = router;
