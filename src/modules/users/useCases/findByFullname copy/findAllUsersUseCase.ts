import { inject, injectable } from "tsyringe";
import { User } from "../../model/entities/User";
import { IFindUserByFullNameDTO } from "../../model/dtos/userDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class FindByFullnameUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository) { }

  async execute({ first_name, last_name }: IFindUserByFullNameDTO): Promise<User[]> {
    return this.usersRepository
      .findUserByFullName({ first_name, last_name });
  }
}

export { FindByFullnameUseCase };