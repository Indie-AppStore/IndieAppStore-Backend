const App = require('../models/appModel');
const cloudinary = require('../config/cloudinary');
const { v4: uuidv4 } = require('uuid');

const createApp = async (req, res) => {
    const { name, description, version, category, screenshots, price } = req.body;

    const newApp = new App({
        name,
        description,
        version,
        category,
        screenshots,
        apkUrl: req.apkUrl,  
        developer: req.user.uid,
        price,
    });

    await newApp.save();
    res.status(201).json({ success: true, data: newApp });
};

const getApps = async (req, res) => {
    const apps = await App.find().sort({ createdAt: -1 });
    res.json({ success: true, data: apps });
};

const getAppById = async (req, res) => {
    const app = await App.findById(req.params.id);
    if (!app) {
        return res.status(404).json({ success: false, message: 'App not found' });
    }
    res.json({ success: true, data: app });
};

const updateApp = async (req, res) => {
    const { name, description, version, category, screenshots, price } = req.body;
    const app = await App.findOneAndUpdate(
        { _id: req.params.id, developer: req.user.uid },
        { name, description, version, category, screenshots, price },
        { new: true }
    );
    if (!app) {
        return res.status(404).json({ success: false, message: 'App not found or you are not the owner' });
    }
    res.json({ success: true, data: app });
};

const deleteApp = async (req, res) => {
    const app = await App.findOneAndDelete({ _id: req.params.id, developer: req.user.uid });
    if (!app) {
        return res.status(404).json({ success: false, message: 'App not found or you are not the owner' });
    }
    res.json({ success: true, message: 'App deleted successfully' });
};

module.exports = {
    createApp,
    getApps,
    getAppById,
    updateApp,
    deleteApp,
};
