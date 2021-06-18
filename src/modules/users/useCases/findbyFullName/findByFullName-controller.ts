import { Request, Response } from "express";
import { FindByFullNameUseCase } from "./findByFullName-useCase";

class FindByFullNameController {
  constructor(private findByFullNameUseCase: FindByFullNameUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { first_name, last_name } = request.params;
    try {
      const allUsers = this.findByFullNameUseCase.execute({ first_name, last_name});
      return response.json(allUsers);
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }
}

export { FindByFullNameController };