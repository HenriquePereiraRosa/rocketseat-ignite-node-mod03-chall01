import { Request, Response } from "express";
import { FindAllUsersOrderedByFirstNameUseCase } from "./findAllUsersUseCase";
import { container } from 'tsyringe';

class FindAllUsersOrderedByFirstNameController {

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const useCase = container.resolve(FindAllUsersOrderedByFirstNameUseCase);
      const users = await useCase.execute();
      console.log("-> CONTROLLER", users);
      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }
}

export { FindAllUsersOrderedByFirstNameController };
