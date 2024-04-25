// routes/contactRoute.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Email configuration and transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Example with Gmail
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Route to handle POST request
router.post('/send-email', async (req, res) => {
    const { contactName, email, idea } = req.body;
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USERNAME, // sender address
            to: 'halilmertogut@gmail.com, dincer.velioglu@gmail.com, mert.uras.edu@gmail.com, fthkuru1903@gmail.com', // list of receivers
            subject: "New Contact Form Submission", // Subject line
            html: `
            <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
                <h2 style="color: #4A90E2;">New Contact Message Received</h2>
                <p>You have received a new message from the contact form on your website.</p>
                <hr style="border: 0; border-top: 1px solid #ccc;">
                <h3>Details:</h3>
                <p><strong>Name:</strong> ${contactName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${idea}</p>
                <hr style="border: 0; border-top: 1px solid #ccc;">
                <p>This message was sent from the contact form on your website.</p>
            </div>
            ` // HTML body content
        });
        res.status(200).send("Email sent successfully!");
    } catch (error) {
        console.error("Failed to send email: ", error);
        res.status(500).send("Failed to send email.");
    }
});

module.exports = router;
