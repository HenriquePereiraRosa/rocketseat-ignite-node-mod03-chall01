import { inject, injectable } from "tsyringe";
import { Msg } from "../../../../errors/ErrorMessages";
import { AppError } from "../../../../errors/AppError";
import { UserDTO } from "../../model/dtos/userDTO";
import { IUserRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository) { }

  async execute({ first_name, last_name, email }): Promise<UserDTO> {
    const userAlreadyexists =  await this.usersRepository.findByEmail(email);

    if(userAlreadyexists.length > 1) {
      throw new AppError(Msg.MultipleResources);
    }
    
    if(userAlreadyexists.length === 1) {
      throw new AppError(Msg.AlreadyExists);
    }

    const userDb = await this.usersRepository.create(
      { first_name, last_name, email });

      return new UserDTO(userDb.first_name, userDb.last_name, userDb.email);
  }
}

export { CreateUserUseCase };