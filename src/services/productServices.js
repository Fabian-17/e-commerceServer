import Product from '../models/product.js';

class ProductServices {
    constructor() {};

    async findAll() {
        return await Product.findAll({
            include: ['stock']
        });
    };

    async create(product) {
        return await Product.create(product, {
            include: ['stock']
        });
    };

    async update(id, product) {
        return await Product.update(product, {
            where: {
                id: id
            }
        });
    };

    async delete(id) {
        return await Product.destroy({
            where: {
                id: id
            }
        });
    };
    
    async findById(id) {
        return await Product.findByPk(id, {
            include: ['stock']
        });
    };
};

export default new ProductServices();