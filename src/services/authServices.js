import User from "../models/user.js";
import bcrypt from 'bcrypt';
import { createJWT } from '../utils/jsonwebtoken.js';

class AuthService {
    async login(email, password) {
        const user = await User.findOne({
            where: { email: email },
            include: ['Role']
        });

        if (!user) {
            throw new Error('User not found');
        };

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        };

        const role = user.Role.name;
        const token = await createJWT({ id: user.id, role });

        return { user, token };
    };
};

export default new AuthService();