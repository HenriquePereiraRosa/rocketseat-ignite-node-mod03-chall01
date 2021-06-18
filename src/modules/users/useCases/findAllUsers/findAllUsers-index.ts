
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { FindAllUsersOrderedByFirstNameController } from './findAllUsers-controller';
import { FindAllUsersOrderedByFirstNameUseCase } from './findAllUsers-use-case';


const usersRepository = new UsersRepository();
const findAllUsersOrderedByFirstNameUseCase = new FindAllUsersOrderedByFirstNameUseCase(usersRepository);
const findAllUsersOrderedByFirstNameController = new FindAllUsersOrderedByFirstNameController(findAllUsersOrderedByFirstNameUseCase);

export { findAllUsersOrderedByFirstNameController };