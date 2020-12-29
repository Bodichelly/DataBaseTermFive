const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

export default class Offenders extends Model {}

Offenders.init({
  // Model attributes are defined here
  personal_id: {
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
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'offenders' // We need to choose the model name
});
