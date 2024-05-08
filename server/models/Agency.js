const mongoose = require('mongoose');

const AgencySchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    authorizedSignatory: { type: String, required: true },
    companyEmail: { type: String, required: true },
    companyPhone: { type: String, required: true },
    authorizedMobile: { type: String, required: true },
    companyTitle: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    taxNumber: { type: String, required: true },
    taxOffice: { type: String, required: true },
    invoiceAddress: { type: String, required: true },
    domainName: { type: String, required: true },
    adminEmail: { type: String, required: true },
    adminPassword: { type: String, required: true },
    packageType: { type: String, required: true },
    packageDuration: { type: String, required: true },
    referenceCode: { type: String },
    agreements: {
        salesContract: { type: Boolean, default: false },
        privacyPolicy: { type: Boolean, default: false },
        kvkk: { type: Boolean, default: false }
    },
    status: {type: String, default: 'waiting'},
    reason: {type: String, default: ''},
});

module.exports = mongoose.model('Agency', AgencySchema);
