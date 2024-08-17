import { DataTypes } from 'sequelize';
import { sequelize } from '../db/configDB.js';


const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    client: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      trader: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
}, {
    tableName: 'roles',
    timestamps: false
});


export default Role;