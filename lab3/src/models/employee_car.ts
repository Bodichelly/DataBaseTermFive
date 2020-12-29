const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

export default class Employee_car extends Model {}

Employee_car.init({
  // Model attributes are defined here
  car_id: {
    type: DataTypes.NUMERIC,
    allowNull: false
  },
  employee_id: {
    type: DataTypes.NUMERIC,
    allowNull: false
  },
  id: {
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'employee_car' // We need to choose the model name
});
