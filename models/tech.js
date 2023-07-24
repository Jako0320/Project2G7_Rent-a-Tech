const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Tech extends Model {}

Tech.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [5],
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tech',
  }
);

module.exports = Tech;
