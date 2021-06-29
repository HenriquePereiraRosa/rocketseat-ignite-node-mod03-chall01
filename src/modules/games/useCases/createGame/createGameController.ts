import { Request, Response } from "express";
import { container } from 'tsyringe';
import { CreateGameUseCase } from "./createGameUseCase";

class CreateGameController {

  async handle(request: Request, response: Response): Promise<Response> {
      const { title } = request.body;
      const useCase = container.resolve(CreateGameUseCase);
      return response.json(await useCase.execute(title));
  }
}

export { CreateGameController };
