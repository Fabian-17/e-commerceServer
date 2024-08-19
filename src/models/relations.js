import User from "./user.js";
import Role from "./role.js";
import Product from "./product.js";
import Stock from "./stock.js";
import Cart from "./cart.js";
import CartItem from "./cartItem.js";


const defineRelations = async () => {
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

// Un usuario puede tener un carrito
User.hasOne(Cart, {
    foreignKey: 'userId',
    as: 'cart'
});

// Un carrito pertenece a un usuario
Cart.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

// Un carrito puede tener múltiples items
Cart.hasMany(CartItem, {
    foreignKey: 'cartId',
    as: 'items'
});

// Un item en el carrito pertenece a un carrito
CartItem.belongsTo(Cart, {
    foreignKey: 'cartId',
    as: 'cart'
});

// Un item en el carrito pertenece a un producto
CartItem.belongsTo(Product, {
    foreignKey: 'productId',
    as: 'product'
});

};

export default defineRelations;