import { DataTypes } from 'sequelize';
import { sequelize } from '../db/configDB.js';


const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
  },
}, {
    tableName: 'roles',
    timestamps: false
});


export default Role;