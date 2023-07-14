const cloudinary = require('../../config/connection');

async function uploadPicture(imagePath) {
  try {
    //Upload
    const result = await cloudinary.uploader.upload(imagePath);

    //Retrieve
    const imageUrl = result.secure_url;
    console.log('Image URL:', imageUrl);
  } catch (error) {
    console.error('Error uploading image:', error);
  }
}

//Use
const imagePath = '/path';
uploadPicture(imagePath);