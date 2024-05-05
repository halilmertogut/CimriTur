const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// Route to initiate password reset request
router.post('/reset-password', async (req, res) => {
    const { email } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Generate password reset token
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send password reset email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: 'Şifre Sıfırlama Talebi',
            html: `
            <!DOCTYPE html>
            <html lang="tr">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; color: #333; background-color: #f4f4f4; }
                    .container { max-width: 600px; margin: 20px auto; background-color: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
                    .header { background-color: #007BFF; color: #ffffff; padding: 20px 40px; text-align: center; }
                    .header h1 { margin: 0; }
                    .content { padding: 20px 40px; text-align: center; line-height: 1.6; }
                    .button { background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
                    .footer { background-color: #eeeeee; padding: 10px 40px; text-align: center; font-size: 12px; }
                    .footer p { margin: 0; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Şifre Sıfırlama</h1>
                    </div>
                    <div class="content">
                        <p>Lütfen aşağıdaki "Şifre Sıfırla" butonuna tıklayarak şifrenizi sıfırlayın. Bu link bir saat içinde geçerliliğini yitirecektir.</p>
                        <a href="${process.env.CLIENT_URL}/password-reset-form/${token}" class="button">Şifre Sıfırla</a>
                    </div>
                    <div class="footer">
                        <p>Eğer bu isteği siz yapmadıysanız, bu e-postayı görmezden geliniz.</p>
                    </div>
                </div>
            </body>
            </html>
            `
        };
        

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ error: "Mail gönderilemedi." });
            } else {
                console.log('Email sent: ' + info.response);
                return res.status(200).json({ message: "Şifre yenileme maili gönderildi." });
            }
        });
    } catch (error) {
        console.error('Error initiating password reset:', error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Route to handle password reset form submission
router.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { email } = decoded;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update user's password
        user.password = hashedPassword;
        await user.save();

        return res.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(400).json({ error: "Invalid or expired token" });
    }
});

module.exports = router;
