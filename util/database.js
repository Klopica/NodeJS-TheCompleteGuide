const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Klopica#1303', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
