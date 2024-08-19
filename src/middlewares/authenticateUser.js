import jwt from 'jsonwebtoken';
import UserServices from '../services/userServices.js';


export const authenticateUser = async (req, res, next) => {
    console.log("Middleware de autenticación ejecutado");

    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const token = authHeader.split(' ')[1]; // Extrae el token eliminando el prefijo 'Bearer'

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await UserServices.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }

        req.user = { id: user.id, role: user.Role.name }; // Adjunta el ID y el rol del usuario al objeto de solicitud
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};