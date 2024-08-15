import { Router } from "express";
import userController from "../controllers/userController.js";

const UserRouter = Router();
const {
    findAll,
    create,
    update,
    delete: deletedUser,
    findById
} = userController;


UserRouter.get("/", findAll);

UserRouter.post("/", create);

UserRouter.put("/:id", update);

UserRouter.delete("/:id", deletedUser);

UserRouter.get("/:id", findById);

export default UserRouter;