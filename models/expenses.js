const Sequelize = require('sequelize');
const sequelize = require('../db');

const CreditExpense = sequelize.define('expenses', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  description: { type: Sequelize.STRING, unique: false },
  creditAmount: { type: Sequelize.STRING, allowNull: false },
});



module.exports = CreditExpense;