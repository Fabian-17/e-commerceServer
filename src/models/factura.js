import { DataTypes } from "sequelize";
import { sequelize } from "../db/configDB.js";
import User from "./user.js";
import Product from "./product.js";

const Factura = sequelize.define('factura', {
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
        allowNull: false
    },
    metodoPago: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    userID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
    },
    productID: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        },
    },
}, {
    timestamps: false
});


export default Factura;