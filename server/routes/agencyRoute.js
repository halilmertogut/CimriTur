const express = require('express');
const router = express.Router();
const Agency = require('../models/Agency');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Configure the transporter for sending emails.
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Function to send emails.
const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: to,
        subject: subject,
        text: text
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Use adminEmail to find the agency
        const agency = await Agency.findOne({ adminEmail: email });
        if (!agency) {
            return res.status(404).json({ message: "Agency not found!" });
        }

        // Use bcrypt to compare the submitted password with the stored adminPassword
        const isMatch = await bcrypt.compare(password, agency.adminPassword);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Create a JWT token
        const token = jwt.sign({ id: agency._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, agency: { id: agency._id, adminEmail: agency.adminEmail } }); // Return agency's id and adminEmail
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/register', async (req, res) => {
    try {
        const newAgency = new Agency(req.body);
        const savedAgency = await newAgency.save();
        res.status(201).json(savedAgency);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/approve/:id', async (req, res) => {
    const { reason } = req.body;
    try {
        const updatedAgency = await Agency.findByIdAndUpdate(req.params.id, { status: 'approved', reason: reason }, { new: true });
        res.json(updatedAgency);

        // Send an email notification.
        await sendEmail(updatedAgency.email, 'Agency Approval', `Your agency has been approved. Reason: ${reason}`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/reject/:id', async (req, res) => {
    const { reason } = req.body;
    try {
        const updatedAgency = await Agency.findByIdAndUpdate(req.params.id, { status: 'rejected', reason: reason }, { new: true });
        res.json(updatedAgency);

        // Send an email notification.
        await sendEmail(updatedAgency.email, 'Agency Rejection', `Your agency has been rejected. Reason: ${reason}`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/agencies', async (req, res) => {
    try {
        const agencies = await Agency.find({});
        res.json(agencies);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve agencies: ' + error.message });
    }
});

module.exports = router;
