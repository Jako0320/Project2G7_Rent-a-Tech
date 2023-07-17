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
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
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
