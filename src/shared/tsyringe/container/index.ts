
import { container } from "tsyringe";
import { IUserRepository } from "src/modules/users/repositories/IUserRepository";
import { UserRepository } from "src/modules/users/repositories/implementations/UserRepository";
import { IGameRepository } from "src/modules/games/repositories/IGameRepository";
import { GameRepository } from "src/modules/games/repositories/implementations/GameRepository";


container.registerSingleton<IUserRepository>(
    "UserRepository", UserRepository
);

container.registerSingleton<IGameRepository>(
    "GamesRepository", GameRepository
);