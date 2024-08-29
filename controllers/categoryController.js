const Category = require('../models/categoryModel');

const createCategory = async (req, res) => {
    const { name } = req.body;

    const category = new Category({ name });
    await category.save();

    res.status(201).json({ success: true, data: category });
};

const getCategories = async (req, res) => {
    const categories = await Category.find();
    res.json({ success: true, data: categories });
};

const deleteCategory = async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
        return res.status(404).json({ success: false, message: 'Category not found' });
    }
    res.json({ success: true, message: 'Category deleted successfully' });
};

module.exports = {
    createCategory,
    getCategories,
    deleteCategory,
};
