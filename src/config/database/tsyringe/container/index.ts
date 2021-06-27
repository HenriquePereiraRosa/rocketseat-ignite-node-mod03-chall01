
import { container } from "tsyringe";
import { IGameRepository } from "../../../../modules/games/repositories/IGameRepository";
import { GameRepository } from "../../../../modules/games/repositories/implementations/GameRepository";
import { UserRepository } from "../../../../modules/users/repositories/implementations/UserRepository";
import { IUserRepository } from "../../../../modules/users/repositories/IUserRepository";


container.registerSingleton<IUserRepository>(
    "UserRepository", UserRepository
);

container.registerSingleton<IGameRepository>(
    "GamesRepository", GameRepository
);