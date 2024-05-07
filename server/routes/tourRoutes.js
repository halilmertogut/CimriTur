const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

router.post('/add', async (req, res) => {
    const {
        name, type, region, description, price, transportType, tourImagesUrl, days,
        destination, currency, startLocation, startDate, endDate
    } = req.body;

    try {
        const newTour = new Tour({
            name,
            type,
            region,
            description,
            price,
            transportType,
            destination,
            currency,
            startLocation,
            startDate,
            endDate,
            tourImagesUrl,
            days
        });

        await newTour.save();
        res.status(201).json({ message: 'Tour successfully added!', tour: newTour });
    } catch (error) {
        console.error("Error adding new tour:", error);
        res.status(500).json({ message: error.message });
    }
});


router.get('/by-date-range', async (req, res) => {
    const { startDate, endDate } = req.query;
    try {
        const tours = await Tour.find({
            startDate: { $gte: new Date(startDate) },
            endDate: { $lte: new Date(endDate) }
        });
        if (tours.length === 0) {
            return res.status(404).json({ message: 'No tours found in the specified date range' });
        }
        res.json(tours);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/all-tours', async (req, res) => {
    try {
        const tours = await Tour.find();
        console.log(tours);
        res.json(tours);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to update a tour
router.patch('/update/:id', async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tour) {
            return res.status(404).json({ message: 'Tour not found' });
        }
        res.json(tour);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to get tours by type
router.get('/by-type/:type', async (req, res) => {
    try {
        const tours = await Tour.find({ type: req.params.type });
        if (!tours.length) {
            return res.status(404).json({ message: 'No tours found with that type' });
        }
        res.json(tours);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Route to get a single tour by ID
router.get('/:id', async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) {
            return res.status(404).json({ message: 'Tour not found' });
        }
        res.json(tour);
    } catch (error) {
        console.error("Error fetching tour:", error);
        res.status(500).json({ message: error.message });
    }
});





module.exports = router;