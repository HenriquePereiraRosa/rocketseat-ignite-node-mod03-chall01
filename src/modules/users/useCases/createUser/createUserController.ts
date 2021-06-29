import { Request, Response } from "express";
import { container } from 'tsyringe';
import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { first_name, last_name, email, games } = request.body;
      const useCase = container.resolve(CreateUserUseCase);
      return response.json(await useCase.execute({ first_name, last_name, email, games }));
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error });
    }
  }
}

export { CreateUserController };
