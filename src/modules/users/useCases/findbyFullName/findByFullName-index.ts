import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { FindByFullNameController } from "./findByFullName-controller";
import { FindByFullNameUseCase } from "./findByFullName-useCase";



const usersRepository = new UsersRepository();
const findByFullNameUseCase = new FindByFullNameUseCase(usersRepository);
const findByFullNameController = new FindByFullNameController(findByFullNameUseCase);

export { findByFullNameController };