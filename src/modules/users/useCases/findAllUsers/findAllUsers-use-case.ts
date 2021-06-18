import { User } from "../../entities/user-entity";
import { IUsersRepository } from "../../repositories/IUsersRepository";


class FindAllUsersOrderedByFirstNameUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute(): Promise<User[]> {
    return this.usersRepository.findAllUsersOrderedByFirstName();
  }
}

export { FindAllUsersOrderedByFirstNameUseCase };