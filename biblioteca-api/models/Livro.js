const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Livro = sequelize.define("Livro", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  anoPublicacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1 },
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
module.exports = Livro;
