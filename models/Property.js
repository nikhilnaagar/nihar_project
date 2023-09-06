const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    propertyImages: [
        {
            data: Buffer, // Binary image data
            contentType: String, // MIME type of the image
        },
    ],
    propertyName: {
        type: String,
        required: true,
    },
    propertyDescription: {
        type: String,
        required: true,
    },
    propertySummary: {
        type: String,
        required: true,
    },
    propertyDate: {
        type: Date,
        default: Date.now,
    },
    propertyType: {
        type: String,
        required: true,
    },
    propertyAddress: {
        type: String,
        required: true,
    },
    ownerName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;