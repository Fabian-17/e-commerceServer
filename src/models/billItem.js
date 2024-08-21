import { DataTypes } from 'sequelize';
import { sequelize } from '../db/configDB.js';

const BillItem = sequelize.define('billItem', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },  
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {
    timestamps: false
});

export default BillItem;