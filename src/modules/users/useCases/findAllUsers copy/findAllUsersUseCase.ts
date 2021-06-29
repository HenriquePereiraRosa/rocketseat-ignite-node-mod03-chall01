import { inject, injectable } from "tsyringe";
import { User } from "../../model/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class FindAllUsersOrderedByFirstNameUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository) { }

  async execute(): Promise<User[]> {
    return this.usersRepository.findAllUsersOrderedByFirstName();
  }
}

export { FindAllUsersOrderedByFirstNameUseCase };