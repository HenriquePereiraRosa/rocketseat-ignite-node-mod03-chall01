import { inject, injectable } from "tsyringe";
import { Game } from "../../entities/Game";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class FindByTitleContainingUseCase {
  constructor(
    @inject("GamesRepository")
    private gameRepository: IGamesRepository) { }

  async execute(title : string): Promise<Game[]> {
    return this.gameRepository
      .findByTitleContaining(title);
  }
}

export { FindByTitleContainingUseCase };