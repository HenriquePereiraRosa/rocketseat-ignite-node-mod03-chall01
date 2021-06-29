
import { Router } from "express";
import { CountAllGamesController } from "../modules/games/useCases/countAllGames/CountAllGamesController";
import { CreateGameController } from "../modules/games/useCases/createGame/createGameController";
import { FindByTitleContainingController } from "../modules/games/useCases/findByTitleContaining/findByTitleContainingController";
import { FindUsersByGameIdController } from "../modules/games/useCases/findUsersByGameId/FindUsersByGameIdController";

const gameRoutes = Router();

const createGameController = new CreateGameController();
const countAllGamesController = new CountAllGamesController();
const findByTitleContainingController = new FindByTitleContainingController();
const findUsersByGameIdController = new FindUsersByGameIdController();

gameRoutes.post("/", createGameController.handle);
gameRoutes.get("/count", countAllGamesController.handle);
gameRoutes.get("/by-title", findByTitleContainingController.handle);
gameRoutes.get("/user/by-game_id", findUsersByGameIdController.handle);

export { gameRoutes };