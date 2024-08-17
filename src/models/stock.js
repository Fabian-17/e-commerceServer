import { DataTypes } from "sequelize";
import { sequelize } from "../db/configDB.js";
import Product from "./product.js";


const Stock = sequelize.define('stock', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productID: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        },
        onDelete: 'CASCADE' // Elimina el stock si el producto relacionado se elimina
    },
}, {
    timestamps: false
});


export default Stock;