const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Produto = sequelize.define('Produto', {
 nome: {
 type: DataTypes.STRING,
 allowNull: false
 },
 preco: {
 type: DataTypes.FLOAT,
 allowNull: false,
 validate: { min: 0 }
 }
}, {
 timestamps: false // remove createdAt/updatedAt
});
module.exports = Produto;
