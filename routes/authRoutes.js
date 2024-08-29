const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/authController');
const { authMiddleware } = require('../middleware');

const router = express.Router();

router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, updateUserProfile);

module.exports = router;
