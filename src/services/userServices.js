import User from "../models/user.js";

class UserServices {
    constructor() {};

    async findAll() {
        return await User.findAll();
    };

    async create(user) {
        return await User.create(user);
    };

    async update(id, user) {
        return await User.update(user, {
            where: {
                id: id
            }
        });
    };

    async delete(id) {
        return await User.destroy({
            where: {
                id: id
            }
        });
    };
    
    async findById(id) {
        return await User.findByPk(id);
    };

    // Encuentra un usuario por su email
    async findByEmail(email) {
        return await User.findOne({
            where: {
                email: email
            },
            include: ['Role'] // Incluye el modelo Role para tener acceso al rol del usuario
        });
    };
    
};

export default new UserServices();