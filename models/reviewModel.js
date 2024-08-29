const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    appId: { type: mongoose.Schema.Types.ObjectId, ref: 'App', required: true },
    user: { type: String, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
