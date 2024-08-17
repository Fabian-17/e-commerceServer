import { DataTypes } from 'sequelize';
import { sequelize } from '../db/configDB.js';
import Stock from './stock.js';

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, 
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stockID: {
        type: DataTypes.INTEGER,
        references: {
            model: Stock,
            key: 'id'
        },
        onDelete: 'CASCADE' // Elimina el stock si el producto relacionado se elimina
    },
}, {
    timestamps: false
});

export default Product;