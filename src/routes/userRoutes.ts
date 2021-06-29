
import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/createUserController";
import { FindAllUsersOrderedByFirstNameController } from "../modules/users/useCases/findAllUsers/findAllUsersController";
import { FindByEmailController } from "../modules/users/useCases/findByEmail/findByEmailController";
import { FindByFullnameController } from "../modules/users/useCases/findByFullname/findAllUsersController";
import { FindByIdWithGamesController } from "../modules/users/useCases/findByIdWithGames/findByIdWithGamesController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const findAllUsersOrderedByFirstNameController = new FindAllUsersOrderedByFirstNameController();
const findByIdWithGamesController = new FindByIdWithGamesController();
const findByFullnameController = new FindByFullnameController();
const findByEmailController = new FindByEmailController();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", findAllUsersOrderedByFirstNameController.handle);
userRoutes.get("/by-id/withGames", findByIdWithGamesController.handle);
userRoutes.get("/by-fullname", findByFullnameController.handle);
userRoutes.get("/by-email", findByEmailController.handle);

export { userRoutes };