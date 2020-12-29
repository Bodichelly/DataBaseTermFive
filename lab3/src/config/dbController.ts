const { Sequelize } = require('sequelize');
const config = require('./config');

// Option 1: Passing a connection URI
export default new Sequelize(`postgres://${config.user}:${config.password}@${config.host}.com:${config.port}/${config.database}`) // Example for postgres
