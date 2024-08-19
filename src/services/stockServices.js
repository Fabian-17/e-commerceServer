import Stock from "../models/stock.js";

class StockServices {
    constructor() {};

    async findAll() {
        return await Stock.findAll();
    };

    async create(stock) {
        return await Stock.create(stock);
    };

    async update(id, stock) {
        return await Stock.update(stock, {
            where: {
                id: id
            }
        });
    };

    async delete(id) {
        return await Stock.destroy({
            where: {
                id: id
            }
        });
    };

    async findById(id) {
        return await Stock.findByPk(id);
    };
};

export default new StockServices();