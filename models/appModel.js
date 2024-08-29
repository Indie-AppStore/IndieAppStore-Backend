const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    version: { type: String, required: true },
    category: { type: String, required: true },
    screenshots: [{ type: String }],
    apkUrl: { type: String, required: true },
    developer: { type: String, required: true },
    price: { type: Number, default: 0 },
    downloads: { type: Number, default: 0 },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    ratingsCount: { type: Number, default: 0 },
    ratingsAverage: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('App', appSchema);
