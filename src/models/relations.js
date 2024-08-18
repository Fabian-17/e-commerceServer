import User from "./user.js";
import Role from "./role.js";

// Relación uno a muchos entre Role y User (Un usuario pertenece a un rol (Muchos a Uno))
User.belongsTo(Role, {
    foreignKey: 'roleId',
    as: 'Role'
});
// Relación uno a muchos entre User y Role (Un rol puede tener muchos usuarios (Uno a Muchos))
Role.hasMany(User, {
    foreignKey: 'roleId',
    as: 'Users'
});