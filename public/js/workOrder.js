const cloudinary = require('../../config/cloudinaryconnection');
require('dotenv').config();

const workorderFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-workOrder').value.trim();
    const zip = document.querySelector('#zip-workOrder').value.trim();
    const make = document.querySelector('#make-workOrder').value.trim();
    const model = document.querySelector('#model-workOrder').value.trim();
    const issue = document.querySelector('#issue-workOrder').value.trim();
    const service = document.querySelector('#service-workOrder').value.trim();

    const imageFile = document.querySelector('#image-workOrder').files[0];

  if (name && zip && make && model && issue && service && imageFile) {
    try {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'my_custom_preset');

    const response = await fetch(process.env.CL_URL, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error('Failed to upload image.');
    }
   
    const data = await response.json();
    const imageUrl = data.secure_url;

    const workorderData = { name, zip, make, model, issue, service, imageUrl };

    const workorderResponse = await fetch('/api/workorderRoutes', {
      method: 'POST',
      body: JSON.stringify(workorderData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (workorderResponse.ok) {
      document.location.replace('/workOrder');
    } else {
      throw new Error('Failed to create work order.');
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while processing the form.');
  }
} else {
  alert('Please fill out all fields, including the image.');
}
};

document.querySelector('.workOrder-form').addEventListener('submit', workorderFormHandler);