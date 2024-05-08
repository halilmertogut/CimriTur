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

router.patch('/approve/:id', async (req, res) => {
    const { reason } = req.body;
    try {
        const updatedAgency = await Agency.findByIdAndUpdate(req.params.id, { status: 'approved', reason: reason }, { new: true });
        res.json(updatedAgency);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/reject/:id', async (req, res) => {
    const { reason } = req.body;
    try {
        const updatedAgency = await Agency.findByIdAndUpdate(req.params.id, { status: 'rejected', reason: reason }, { new: true });
        res.json(updatedAgency);
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
