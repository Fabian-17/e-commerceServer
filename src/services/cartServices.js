import Cart from '../models/cart.js';
import CartItem from '../models/cartItem.js';

class CartServices {
    async findByUserId(userId) {
        return await Cart.findOne({ 
            where: { userId },
            include: [{
                model: CartItem,
                as: 'items',
                include: ['product']
            }]
        });
    };

    async addItem(userId, productId, quantity) {
        const cart = await this.findByUserId(userId);
        if (!cart) {
            const newCart = await Cart.create({ userId });
            return await CartItem.create({ cartId: newCart.id, productId, quantity });
        };
        return await CartItem.create({ cartId: cart.id, productId, quantity });
    };

    async removeItem(cartItemId) {
        return await CartItem.destroy({ where: { id: cartItemId } });
    };

    async clearCart(userId) {
        const cart = await this.findByUserId(userId);
        if (cart) {
            return await CartItem.destroy({ where: { cartId: cart.id } });
        };
    };
};

export default new CartServices();