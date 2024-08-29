const express = require('express');
const {
    createApp,
    getApps,
    getAppById,
    updateApp,
    deleteApp
} = require('../controllers/appController');
const { authMiddleware } = require('../middleware');

const router = express.Router();

router.post('/', authMiddleware, createApp);
router.get('/', getApps);
router.get('/:id', getAppById);
router.put('/:id', authMiddleware, updateApp);
router.delete('/:id', authMiddleware, deleteApp);

module.exports = router;
