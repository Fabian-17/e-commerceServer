import userServices from "../services/userServices.js";
import authService from "../services/authServices.js"
import { CatchError } from "../utils/catchError.js";


class UserController {
    constructor() {};
  
    async findAll(_req, res) {
      try {
        const user = await userServices.findAll();
        res.status(200).json(user);
      } catch (error) {
        return CatchError(error, res);
      };
    };
  
    async create(req, res) {
      try {
        const user = req.body;
        const newUser = await userServices.create(user);
        res.status(201).json(newUser);
      } catch (error) {
        return CatchError(error, res);
      };
    };
  
    async update(req, res) {
      try {
        const id = req.params.id;
        const user = req.body;
        await userServices.update(id, user);
        res.status(200).json({ message: "User updated successfully" });
      } catch (error) {
        return CatchError(error, res);
      };
    };
  
    async delete(req, res) {
      try {
        const id = req.params.id;
        await userServices.delete(id);
        res.status(200).json({ message: "User deleted successfully" });
      } catch (error) {
        return CatchError(error, res);
      };
    };
  
    async findById(req, res) {
      try {
        const id = req.params.id;
        const user = await userServices.findById(id);
        res.status(200).json(user);
      } catch (error) {
        return CatchError(error, res);
      };
    };

    async login(req, res) {
      try {
          const { email, password } = req.body;
          const { user, token } = await authService.login(email, password);
          res.status(200).json({ token });
      } catch (error) {
          return CatchError(error, res);
      };
  };
  
  };


export default new UserController();