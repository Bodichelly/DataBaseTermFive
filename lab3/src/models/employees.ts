const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

export default class Employees extends Model {}

Employees.init({
  // Model attributes are defined here
  employee_id: {
    type: DataTypes.NUMERIC,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  birth_day: {
    type: DataTypes.DATE,
    allowNull: false
  },
  contact_number: {
    type: DataTypes.NUMERIC,
    allowNull: false
  },
  home_address: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  post: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  department_id: {
    type: DataTypes.NUMERIC,
    allowNull: false
  },
  finished_cases: {
    type: DataTypes.NUMERIC
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'employees' // We need to choose the model name
});
