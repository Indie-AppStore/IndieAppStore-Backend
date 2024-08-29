const express = require("express");
const {
    createReview,
    getReviews,
    deleteReview,
} = require("../controllers/reviewController");
const { authMiddleware } = require("../middleware");

const router = express.Router();

router.post("/:appId", authMiddleware, createReview);
router.get("/:appId", getReviews);
router.delete("/:id", authMiddleware, deleteReview);

module.exports = router;
