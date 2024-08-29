const cloudinary = require('cloudinary').v2;
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

module.exports = {
    uploadImage: async (filePath) => {
        return await cloudinary.uploader.upload(filePath);
    },
    deleteImage: async (publicId) => {
        return await cloudinary.uploader.destroy(publicId);
    },
};
