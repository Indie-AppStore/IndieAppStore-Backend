const admin = require('../config/firebase');
const User = require('../models/userModel');

const getUserProfile = async (req, res) => {
    const user = await User.findOne({ uid: req.user.uid });
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json({ success: true, data: user });
};

const updateUserProfile = async (req, res) => {
    const { displayName, avatarUrl } = req.body;
    const user = await User.findOneAndUpdate(
        { uid: req.user.uid },
        { displayName, avatarUrl },
        { new: true }
    );
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json({ success: true, data: user });
};

module.exports = {
    getUserProfile,
    updateUserProfile,
};
