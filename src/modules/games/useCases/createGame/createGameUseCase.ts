import { inject, injectable } from "tsyringe";
import { Msg } from "../../../../errors/ErrorMessages";
import { AppError } from "../../../../errors/AppError";
import { UserDTO } from "../../model/dtos/userDTO";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IGamesRepository } from "../../repositories/IGamesRepository";
import { Game } from "../../entities/Game";

@injectable()
class CreateGameUseCase {
  constructor(
    @inject("GamesRepository")
    private repository: IGamesRepository) { }

  async execute(title): Promise<Game> {
    if(!title) {
      throw new AppError(Msg.ParamCannotBeNull, ['title']);
    }
    const alreadyexists =  await this.repository.findByTitle(title);

    if(alreadyexists.length > 1) {
      throw new AppError(Msg.MultipleResources);
    }
    
    if(alreadyexists.length === 1) {
      throw new AppError(Msg.AlreadyExists);
    }

    return await this.repository.create(title);
  }
}

export { CreateGameUseCase };