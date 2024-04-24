const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    tourName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 120
    },
    tourSlogan: {
        type: String,
        required: true
    },
    tourCategory: {
        type: String,
        required: true
    },
    selectedTourType: {
        type: String,
        required: false
    },
    departurePoint: {
        type: String,
        required: true
    },
    transportType: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    popularLocation: {
        type: String,
        required: false
    },
    priceType: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
