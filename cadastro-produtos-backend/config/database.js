const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cadastro_produtos', 'root', 'digao120', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
