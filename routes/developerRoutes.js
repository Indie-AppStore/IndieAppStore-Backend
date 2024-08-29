const express = require('express');
const { getDeveloperApps } = require('../controllers/developerController');
const { authMiddleware } = require('../middleware');

const router = express.Router();

router.get('/apps', authMiddleware, getDeveloperApps);

module.exports = router;
