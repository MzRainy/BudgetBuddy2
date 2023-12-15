const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Total extends Model {}

Total.inti(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        budget_amt: {
            type: DataTypes.DECIMAL,
        },
        remainder_amt: {
            type: DataTypes.DECIMAL
        },
        user_id: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'total'
    }
);