import { Request, Response } from "express";
import { FindAllUsersOrderedByFirstNameUseCase } from "./findAllUsersUseCase";
import { container } from 'tsyringe';

class FindAllUsersOrderedByFirstNameController {

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const allUsers = container.resolve(FindAllUsersOrderedByFirstNameUseCase);
      return response.json(allUsers.execute());
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }
}

export { FindAllUsersOrderedByFirstNameController };
