const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

router.post('/add', async (req, res) => {
    console.log(req.body); // Log the entire body to see what you're getting here

    const {
        name, type, region, description, price, transportType, tourImagesUrl, days
    } = req.body;

    console.log('Tour Images URLs from Request:', tourImagesUrl); // Specifically log the images URLs

    try {
        const newTour = new Tour({
            name,
            type,
            region,
            description,
            price,
            transportType,
            tourImagesUrl, // Ensure this name matches the schema
            days
        });

        await newTour.save();
        res.status(201).json({ message: 'Tour successfully added!', tour: newTour });
    } catch (error) {
        console.error("Error adding new tour:", error);
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


module.exports = router;
