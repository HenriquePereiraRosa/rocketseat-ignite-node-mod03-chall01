import { inject, injectable } from "tsyringe";
import { Game } from "../../entities/Game";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class CountAllGamesUseCase {
  constructor(
    @inject("GamesRepository")
    private gameRepository: IGamesRepository) { }

  async execute(): Promise<[{ count: string; }]> {
    return this.gameRepository.countAllGames();
  }
}

export { CountAllGamesUseCase };