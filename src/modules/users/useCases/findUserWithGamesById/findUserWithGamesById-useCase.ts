import { IFindUserWithGamesDTO } from "../../dtos/user-dto";
import { User } from "../../entities/user-entity";
import { IUsersRepository } from "../../repositories/IUsersRepository";


class FindUserWithGamesByIdUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IFindUserWithGamesDTO): Promise<User> {
    return this.usersRepository.findUserWithGamesById({ user_id });
  }
}

export { FindUserWithGamesByIdUseCase };