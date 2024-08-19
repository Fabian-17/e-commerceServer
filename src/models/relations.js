import User from "./user.js";
import Role from "./role.js";
import Product from "./product.js";
import Stock from "./stock.js";

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

// Relación uno a uno entre Product y Stock (Un producto tiene un stock (Uno a Uno))
Product.hasOne(Stock, {
    foreignKey: 'productId',
    as: 'Stock'
});

// Relación uno a uno entre Stock y Product (Un stock pertenece a un producto (Uno a Uno))
Stock.belongsTo(Product, {
    foreignKey: 'productId',
    as: 'Product'
});