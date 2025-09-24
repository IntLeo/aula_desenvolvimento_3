const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
 dialect: 'sqlite',
 storage: './database.sqlite',
 logging: false // desligue logs SQL se preferir
});
module.exports = sequelize;