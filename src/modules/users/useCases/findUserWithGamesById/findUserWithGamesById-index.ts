
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { FindUserWithGamesByIdController } from './findUserWithGamesById-controller';
import { FindUserWithGamesByIdUseCase } from './findUserWithGamesById-useCase';


const usersRepository = new UsersRepository();
const findUserWithGamesByIdUseCase = new FindUserWithGamesByIdUseCase(usersRepository);
const findUserWithGamesByIdController = new FindUserWithGamesByIdController(findUserWithGamesByIdUseCase);

export { findUserWithGamesByIdController };