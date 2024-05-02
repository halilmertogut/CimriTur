const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
    description: String,
    imageUrl: String,  // Her gün için tek resim
});

const tourSchema = new mongoose.Schema({
    name: String,
    type: String,
    region: String,
    description: String,
    transportType: String,
    rating: { type: Number, default: 0 },
    comments: [
        {
            text: String,
            user: String,
            postedOn: { type: Date, default: Date.now }
        }
    ],
    tourImagesUrl: { type: [String], required: true },  // Resim URL'leri listesi
    price: Number,
    currency: { type: String, default: 'TRY' },
    days: [daySchema],
    mealsIncluded: {  // Dahil edilen öğünler
        breakfast: { type: Boolean, default: false },
        lunch: { type: Boolean, default: false },
        tea: { type: Boolean, default: false },
        dinner: { type: Boolean, default: false }
    }
});

module.exports = mongoose.model('Tour', tourSchema);
