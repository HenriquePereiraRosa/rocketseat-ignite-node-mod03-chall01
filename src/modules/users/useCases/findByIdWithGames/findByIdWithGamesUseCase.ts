import { inject, injectable } from "tsyringe";
import { User } from "../../model/entities/User";
import { IFindUserWithGamesDTO } from "../../model/dtos/userDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class FindByIdWithGamesUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository) { }

  async execute({ user_id }: IFindUserWithGamesDTO): Promise<User> {
    return this.usersRepository
      .findUserWithGamesById({ user_id });
  }
}

export { FindByIdWithGamesUseCase };