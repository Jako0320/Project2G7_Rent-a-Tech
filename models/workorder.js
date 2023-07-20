const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workorder extends Model {}

Workorder.init(
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
    issue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    make: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },  
    service: {
      type: DataTypes.ENUM,
      values: ['Flat tire', 'Car will not start', 'Out of gas', 'Other'],
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    tech_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tech',
        key: 'id',
      },
    },
  },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workorder',
}
);

module.exports = Workorder;
