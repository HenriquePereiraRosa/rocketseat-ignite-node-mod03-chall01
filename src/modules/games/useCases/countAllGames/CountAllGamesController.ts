import { Request, Response } from "express";
import { container } from 'tsyringe';
import { CountAllGamesUseCase } from "./CountAllGamesUseCase";

class CountAllGamesController {

  async handle(request: Request, response: Response): Promise<Response> {

    const useCase = container.resolve(CountAllGamesUseCase);
    const ret = await useCase.execute();
    return response.json(ret);
  }
}

export { CountAllGamesController };
