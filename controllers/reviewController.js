const Review = require("../models/reviewModel");
const App = require("../models/appModel");

const createReview = async (req, res) => {
    const { rating, comment } = req.body;
    const appId = req.params.appId;

    const existingReview = await Review.findOne({ appId, user: req.user.uid });
    if (existingReview) {
        return res
            .status(400)
            .json({
                success: false,
                message: "You have already reviewed this app",
            });
    }

    const review = new Review({
        rating,
        comment,
        appId,
        user: req.user.uid,
    });

    await review.save();

    const app = await App.findById(appId);
    app.reviews.push(review._id);
    app.ratingsCount += 1;
    app.ratingsAverage =
        (app.ratingsAverage * (app.ratingsCount - 1) + rating) /
        app.ratingsCount;

    await app.save();

    res.status(201).json({ success: true, data: review });
};

const getReviews = async (req, res) => {
    const appId = req.params.appId;
    const reviews = await Review.find({ appId }).sort({ createdAt: -1 });
    res.json({ success: true, data: reviews });
};

const deleteReview = async (req, res) => {
    const review = await Review.findOneAndDelete({
        _id: req.params.id,
        user: req.user.uid,
    });
    if (!review) {
        return res
            .status(404)
            .json({
                success: false,
                message: "Review not found or you are not the owner",
            });
    }

    const app = await App.findById(review.appId);
    app.reviews.pull(review._id);
    app.ratingsCount -= 1;
    app.ratingsAverage =
        app.ratingsCount > 0
            ? (app.ratingsAverage * (app.ratingsCount + 1) - review.rating) /
              app.ratingsCount
            : 0;

    await app.save();

    res.json({ success: true, message: "Review deleted successfully" });
};

module.exports = {
    createReview,
    getReviews,
    deleteReview,
};
