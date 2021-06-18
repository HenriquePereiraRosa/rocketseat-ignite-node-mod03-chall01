import { Router } from "express";
import { findAllUsersOrderedByFirstNameController } from "src/modules/users/useCases/findAllUsers/findAllUsers-index";
import { findUserWithGamesByIdController } from "src/modules/users/useCases/findUserWithGamesById/findUserWithGamesById-index";

const usersRoutes = Router();

usersRoutes.get("/", (request, response) =>
    findAllUsersOrderedByFirstNameController.handle(request, response));

usersRoutes.get("/user_id/:user_id", (request, response) =>
    findUserWithGamesByIdController.handle(request, response));

export { usersRoutes };