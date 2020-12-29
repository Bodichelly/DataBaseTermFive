const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

export default class Departments extends Model {}

Departments.init({
  // Model attributes are defined here
  department_id: {
    type: DataTypes.NUMERIC,
    allowNull: false
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  post_code: {
    type: DataTypes.NUMERIC,
    allowNull: false
  },
  contact_number: {
    type: DataTypes.NUMERIC,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'departments' // We need to choose the model name
});