const App = require('../models/appModel');

const getDeveloperApps = async (req, res) => {
    const apps = await App.find({ developer: req.user.uid });
    res.json({ success: true, data: apps });
};

module.exports = {
    getDeveloperApps,
};
