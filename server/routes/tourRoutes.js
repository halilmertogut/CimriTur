const express = require('express');
const multer = require('multer');
const router = express.Router();
const Tour = require('../models/Tour'); // Ensure the path matches your structure

// Multer setup for image uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/'); // Ensure this path exists or is handled dynamically
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// POST endpoint to add a new tour
router.post('/add', upload.array('images', 12), async (req, res) => {
    const { name, type, region, description, price } = req.body;
    const days = JSON.parse(req.body.days); // Assume days is sent as a JSON string

    days.forEach((day, index) => {
        if (req.files[index]) {
            day.imageUrl = req.files[index].path; // Attach image URL from the uploaded file
        }
    });

    try {
        const newTour = new Tour({
            name,
            type,
            region,
            description,
            price,
            days
        });
        await newTour.save();
        res.status(201).json({ message: 'Tour successfully added!', tour: newTour });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
