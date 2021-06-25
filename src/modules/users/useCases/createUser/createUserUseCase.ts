import { inject, injectable } from "tsyringe";
import { User } from "../../model/entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository) { }

  execute({ first_name, last_name, email }): Promise<User> {
    console.log("use cases: " + first_name + ": " + last_name)
    return this.usersRepository.create(
      { first_name, last_name, email });
  }
}

export { CreateUserUseCase };