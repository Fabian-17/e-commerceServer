import stockServices from "../services/stockServices.js";
import { CatchError } from "../utils/catchError.js";


class StockController {
    constructor() {};

    async findAll(_req, res) {
        try {
            const stocks = await stockServices.findAll();
            res.status(200).json(stocks);
        } catch (error) {
            return CatchError(error, res);
        };
    };

    async create(req, res) {
        try {
            const stock = req.body;
            const newStock = await stockServices.create(stock);
            res.status(201).json(newStock);
        } catch (error) {
            return CatchError(error, res);
        };
    };

    async update(req, res) {
        try {
            const id = req.params.id;
            const stock = req.body;
            await stockServices.update(id, stock);
            res.status(200).json({ message: "Stock updated successfully" });
        } catch (error) {
            return CatchError(error, res);
        };
    };

    async delete(req, res) {
        try {
            const id = req.params.id;
            await stockServices.delete(id);
            res.status(200).json({ message: "Stock deleted successfully" });
        } catch (error) {
            return CatchError(error, res);
        };
    };

    async findById(req, res) {
        try {
            const id = req.params.id;
            const stock = await stockServices.findById(id);
            res.status(200).json(stock);
        } catch (error) {
            return CatchError(error, res);
        };
    };

};


export default new StockController();