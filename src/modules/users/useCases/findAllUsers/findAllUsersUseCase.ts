import { inject, injectable } from "tsyringe";
import { User } from "../../model/entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class FindAllUsersOrderedByFirstNameUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository) { }

  execute(): Promise<User[]> {
    return this.usersRepository.findAllUsersOrderedByFirstName();
  }
}

export { FindAllUsersOrderedByFirstNameUseCase };