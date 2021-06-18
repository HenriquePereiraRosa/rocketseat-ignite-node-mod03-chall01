import { Request, Response } from "express";
import { FindAllUsersOrderedByFirstNameUseCase } from "./findAllUsers-use-case";

class FindAllUsersOrderedByFirstNameController {
  constructor(private findAllUsersOrderedByFirstName: FindAllUsersOrderedByFirstNameUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const allUsers = this.findAllUsersOrderedByFirstName.execute();
      return response.json(allUsers);
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }
}

export { FindAllUsersOrderedByFirstNameController };