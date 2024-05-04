const express = require('express');
const router = express.Router();
const Agency = require('../models/Agency');

router.post('/register', async (req, res) => {
    try {
        const newAgency = new Agency(req.body);
        const savedAgency = await newAgency.save();
        res.status(201).json(savedAgency);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
