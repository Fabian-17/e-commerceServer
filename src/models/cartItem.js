import { DataTypes } from "sequelize";
import { sequelize } from '../db/configDB.js';


const CartItem = sequelize.define('cartItem', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
});

export default CartItem;