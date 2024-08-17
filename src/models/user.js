import { DataTypes } from 'sequelize';
import { sequelize } from '../db/configDB.js';
import Role from './role.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleID: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'id'
        },
    },
}, {
    timestamps: false
},);

export default User;