import { inject, injectable } from "tsyringe";
import { User } from "../../model/entities/User";
import { IFindUserByFullNameDTO } from "../../model/dtos/userDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class FindByEmailUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository) { }

  async execute(email: string): Promise<User[]> {
    return this.usersRepository
      .findByEmail(email);
  }
}

export { FindByEmailUseCase };