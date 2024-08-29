const App = require('../models/appModel');
const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json({ success: true, data: users });
};

const approveApp = async (req, res) => {
    const app = await App.findByIdAndUpdate(req.params.id, { approved: true }, { new: true });
    if (!app) {
        return res.status(404).json({ success: false, message: 'App not found' });
    }
    res.json({ success: true, data: app });
};

module.exports = {
    getAllUsers,
    approveApp,
};
