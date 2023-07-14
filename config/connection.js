const Sequelize = require('sequelize');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

cloudinary.config({
  cloud_name: process.env.CL_CLOUD,
  api_key: process.env.CL_API,
  api_secret: process.env.CL_SECRET
});


module.exports = { sequelize, cloudinary };
