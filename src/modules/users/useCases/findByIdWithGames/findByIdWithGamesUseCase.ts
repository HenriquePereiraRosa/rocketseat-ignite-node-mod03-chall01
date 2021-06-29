import { inject, injectable } from "tsyringe";
import { User } from "../../model/entities/User";
import { IFindUserWithGamesDTO } from "../../model/dtos/userDTO";
import { IUserRepository } from "../../repositories/IUsersRepository";

@injectable()
class FindByIdWithGamesUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository) { }

  async execute({ user_id }: IFindUserWithGamesDTO): Promise<User> {
    return this.usersRepository
      .findUserWithGamesById({ user_id });
  }
}

export { FindByIdWithGamesUseCase };