import { inject, injectable } from "tsyringe";
import { User } from "../../../users/model/entities/User";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class FindUsersByGameIdUseCase {
  constructor(
    @inject("GamesRepository")
    private gameRepository: IGamesRepository) { }

  async execute(id : string): Promise<User[]> {
    return this.gameRepository
      .findUsersByGameId(id);
  }
}

export { FindUsersByGameIdUseCase };