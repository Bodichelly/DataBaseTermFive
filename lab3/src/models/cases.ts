const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

export default class Cases extends Model {}

Cases.init({
  // Model attributes are defined here
  policemen_id: {
    type: DataTypes.NUMERIC,
    allowNull: false
  },
  offender_personal_id: {
    type: DataTypes.NUMERIC,
    allowNull: false
  },
  case_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  law_article: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  commit_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  finish_date: {
    type: DataTypes.DATE
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'cases' // We need to choose the model name
});