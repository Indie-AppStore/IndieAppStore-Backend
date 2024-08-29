const express = require('express');
const authRoutes = require('./authRoutes');
const appRoutes = require('./appRoutes');
const reviewRoutes = require('./reviewRoutes');
const developerRoutes = require('./developerRoutes');
const categoryRoutes = require('./categoryRoutes');
const adminRoutes = require('./adminRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/apps', appRoutes);
router.use('/reviews', reviewRoutes);
router.use('/developer', developerRoutes);
router.use('/categories', categoryRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
