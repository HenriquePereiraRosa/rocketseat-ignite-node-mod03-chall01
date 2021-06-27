
import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/createUserController";
import { FindAllUsersOrderedByFirstNameController } from "../modules/users/useCases/findAllUsers/findAllUsersController";
import { FindByEmailController } from "../modules/users/useCases/findByEmail/findByEmailController";
import { FindByFullnameController } from "../modules/users/useCases/findByFullname/findAllUsersController";
import { FindByIdWithGamesController } from "../modules/users/useCases/findByIdWithGames/findByIdWithGamesController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const findAllUsersOrderedByFirstNameController = new FindAllUsersOrderedByFirstNameController();
const findByIdWithGamesController = new FindByIdWithGamesController();
const findByFullnameController = new FindByFullnameController();
const findByEmailController = new FindByEmailController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", findAllUsersOrderedByFirstNameController.handle);
usersRoutes.get("/by-id/withGames", findByIdWithGamesController.handle);
usersRoutes.get("/by-fullname", findByFullnameController.handle);
usersRoutes.get("/by-email", findByEmailController.handle);

export { usersRoutes };