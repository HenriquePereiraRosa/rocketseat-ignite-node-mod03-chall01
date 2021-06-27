import { Request, Response } from "express";
import { FindAllUsersOrderedByFirstNameUseCase } from "./findAllUsersUseCase";
import { container } from 'tsyringe';

class FindAllUsersOrderedByFirstNameController {

  async handle(request: Request, response: Response): Promise<Response> {
      const useCase = container.resolve(FindAllUsersOrderedByFirstNameUseCase);
      const users = await useCase.execute();
      return response.json(users);
  }
}

export { FindAllUsersOrderedByFirstNameController };
