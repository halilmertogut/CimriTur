// models/Tour.js
const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
    description: String,
    imageUrl: String,  // Single image per day
});

const tourSchema = new mongoose.Schema({
    name: String,
    type: String,
    region: String,
    description: String,
    transportType: String,
    rating: { type: Number, default: 0 }, 
    comments: [{ 
        text: String, 
        user: String, 
        postedOn: { type: Date, default: Date.now } 
    }],
    tourImagesUrl: { type: [String], required: true},  // URL listesi için doğru tanımlama
    price: Number,
    days: [daySchema],
});


module.exports = mongoose.model('Tour', tourSchema);
