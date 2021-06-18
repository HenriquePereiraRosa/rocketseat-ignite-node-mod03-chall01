import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from '../../entities/user-entity';
import { IFindUserByFullNameDTO } from "../../dtos/user-dto";


class FindByFullNameUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ first_name, last_name }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    return this.usersRepository.findUserByFullName({ first_name, last_name });
  }
}

export { FindByFullNameUseCase };