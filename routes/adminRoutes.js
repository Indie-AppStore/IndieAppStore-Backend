const express = require('express');
const { getAllUsers, approveApp } = require('../controllers/adminController');
const { authMiddleware } = require('../middleware');

const router = express.Router();

router.get('/users', authMiddleware, getAllUsers);
router.put('/apps/:id/approve', authMiddleware, approveApp);

module.exports = router;
