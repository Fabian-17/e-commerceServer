import { DataTypes } from 'sequelize';
import { sequelize } from '../db/configDB.js';

const Bill = sequelize.define('bill', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descuento: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    },
    metodoPago: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
}, {
    timestamps: false
});

export default Bill;