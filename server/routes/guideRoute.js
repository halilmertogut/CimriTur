const express = require('express');
const Guide = require('../models/Guide');  // Ensure the path matches your structure
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// POST: Create a new guide
router.post('/register', async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        // Check if the guide already exists in the database
        const existingGuide = await Guide.findOne({ email });
        if (existingGuide) {
            return res.status(400).json({ message: "Email already in use by another guide" });
        }

        // Hash the password before saving the guide to the database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new guide with hashed password and isVerified set to false
        const newGuide = new Guide({
            ...req.body,
            password: hashedPassword,
            isVerified: false // Ensure all new guides are not verified initially
        });

        // Save the new guide to the database
        const savedGuide = await newGuide.save();
        res.status(201).json({
            message: "Guide registered successfully",
            guide: {
                id: savedGuide._id,
                fullName: savedGuide.fullName,
                email: savedGuide.email,
                isVerified: savedGuide.isVerified
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET: Retrieve all guides
router.get('/all-guides', async (req, res) => {
    try {
        const guides = await Guide.find();
        res.status(200).json(guides);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET: Retrieve a single guide by ID
router.get('/:id', async (req, res) => {
    try {
        const guide = await Guide.findById(req.params.id);
        if (!guide) return res.status(404).json({ message: "Guide not found" });
        res.json(guide);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT: Update a guide's information
router.put('/:id', async (req, res) => {
    try {
        const guide = await Guide.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(guide);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE: Remove a guide
router.delete('/:id', async (req, res) => {
    try {
        const guide = await Guide.findByIdAndDelete(req.params.id);
        if (!guide) return res.status(404).json({ message: "Guide not found" });
        res.json({ message: 'Guide deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const guide = await Guide.findOne({ email });
        if (!guide) {
            return res.status(404).json({ message: "Guide not found" });
        }

        // Check if the guide is verified
        if (!guide.isVerified) {
            return res.status(401).json({ message: "Guide account is not verified." });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, guide.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate a token
        const token = jwt.sign({ id: guide._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({
            message: "Logged in successfully",
            token,
            guide: {
                id: guide._id,
                name: guide.fullName,
                email: guide.email
            }
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
