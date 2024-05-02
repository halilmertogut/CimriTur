const mongoose = require('mongoose');

const GuideSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: String,
    dateOfBirth: Date,
    address: String,
    languages: [String],
    experience: [String],
    certifications: [String],
    profilePhoto: String,
    biography: String,
    tourRegions: [String],
    references: String,
    nationalId: { type: String, required: true },
    bloodType: String,
    registryNo: String,
    licenseNo: String,
    licenseValidity: Date,
    availableTimes: [String],
    availableDates: [Date],
    selectedDate: Date,
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false}
});

const Guide = mongoose.model('Guide', GuideSchema);

module.exports = Guide;
