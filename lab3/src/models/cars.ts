
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

export default class Cars extends Model {}

Cars.init({
  // Model attributes are defined here
  car_id: {
    type: DataTypes.NUMERIC,
    allowNull: false
  },
  licence_plate: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  vin_code: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  department_id: {
    type: DataTypes.NUMERIC,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'cars' // We need to choose the model name
});
