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
      type: DataTypes.ENUM,
      values: ['Tire pressure low/flat', 'Shaky steering wheel/vibrations', 'Observe smoke', 'Check engine light', 'Headlights', 'Dead battery', 'Car alarm', 'A/C issues', 'Heater issues', 'Lockout', 'Unsure', 'Other', 'No issue'],
      allowNull: false,
    },
    make: {
      type: DataTypes.ENUM,
      values: ['Honda/Acura', 'Toyota/Lexus', 'Kia', 'Nissan', 'Ford', 'Chevrolet', 'Hyundai', 'Jeep', 'Subaru', 'Mazda', 'Mercedes-Benz', 'Volkswagen/BMW', 'Other'],
      allowNull: false
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
      values: ['Oil change', 'General Diagnosis', 'Wheel alignment', 'Replace air filters', 'Replace wiper blades', 'Antifreeze', 'Brake fluid', 'State Inspection', 'Towing', 'Unsure', 'Other'],
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
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
