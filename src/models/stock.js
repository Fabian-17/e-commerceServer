import { DataTypes } from "sequelize";
import { sequelize } from "../db/configDB.js";



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
}, {
    timestamps: false
});


export default Stock;