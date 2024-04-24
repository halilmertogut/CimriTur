const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour'); // Ensure you have a Tour model defined

// Middleware to check authentication
const authenticateToken = require('../middleware/authMiddleware'); // Ensure this path is correct

// POST route to add a new tour
router.post('/add', authenticateToken, async (req, res) => {
    try {
        const { tourName, tourSlogan, tourCategory, selectedTourType, departurePoint, transportType, duration, location, region, popularLocation, priceType } = req.body;
        
        const newTour = new Tour({
            tourName,
            tourSlogan,
            tourCategory,
            tourType: selectedTourType,
            departurePoint,
            transportType,
            duration,
            location,
            region,
            popularLocation,
            priceType
        });
        
        const savedTour = await newTour.save();
        res.status(201).json({ message: "Tour added successfully!", savedTour });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add tour due to server error." });
    }
});

// GET route to retrieve all tours
router.get('/all', authenticateToken, async (req, res) => {
    try {
        const tours = await Tour.find({});
        res.status(200).json(tours);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve tours due to server error." });
    }
});

// GET route to retrieve a single tour by ID
router.get('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const tour = await Tour.findById(id);
        if (!tour) {
            return res.status(404).json({ message: "Tour not found." });
        }
        res.status(200).json(tour);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve tour due to server error." });
    }
});

// DELETE route to delete a tour
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTour = await Tour.findByIdAndDelete(id);
        if (!deletedTour) {
            return res.status(404).json({ message: "Tour not found." });
        }
        res.status(200).json({ message: "Tour deleted successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete tour due to server error." });
    }
});

// PUT route to update a tour
router.put('/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { tourName, tourSlogan, tourCategory, selectedTourType, departurePoint, transportType, duration, location, region, popularLocation, priceType } = req.body;
    
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            tourName,
            tourSlogan,
            tourCategory,
            tourType: selectedTourType,
            departurePoint,
            transportType,
            duration,
            location,
            region,
            popularLocation,
            priceType
        }, { new: true });
        
        if (!updatedTour) {
            return res.status(404).json({ message: "Tour not found." });
        }
        res.status(200).json({ message: "Tour updated successfully.", updatedTour });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update tour due to server error." });
    }
});

module.exports = router;
