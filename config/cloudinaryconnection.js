const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CL_CLOUD,
  api_key: process.env.CL_API,
  api_secret: process.env.CL_SECRET
});

module.exports = cloudinary;
