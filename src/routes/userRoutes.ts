
import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/createUserController";
import { FindAllUsersOrderedByFirstNameController } from "../modules/users/useCases/findAllUsers/findAllUsersController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const findAllUsersOrderedByFirstNameController = new FindAllUsersOrderedByFirstNameController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/", findAllUsersOrderedByFirstNameController.handle);

export { usersRoutes };