import { inject, injectable } from "tsyringe";
import { User } from "../../model/entities/User";
import { IUserRepository } from "../../repositories/IUsersRepository";

@injectable()
class FindAllUsersOrderedByFirstNameUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository) { }

  async execute(): Promise<User[]> {
    return this.usersRepository.findAllUsersOrderedByFirstName();
  }
}

export { FindAllUsersOrderedByFirstNameUseCase };