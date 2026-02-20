const multer = require("multer");
// Sahi Tariqa (New Version)
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "registration_images",
        allowed_formats: ["jpg", "png", "jpeg", "jfif"],
    }
});

const upload = multer({ storage });
module.exports = upload;