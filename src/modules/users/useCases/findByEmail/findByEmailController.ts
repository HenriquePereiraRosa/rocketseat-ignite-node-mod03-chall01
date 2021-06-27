import { Request, Response } from "express";
import { container } from 'tsyringe';
import { FindByEmailUseCase } from "./findByEmailUseCase";

class FindByEmailController {

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email }: string = request.query;

      const useCase = container.resolve(FindByEmailUseCase);
      const ret = await useCase.execute(email);
      return response.json(ret);
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }
}

export { FindByEmailController };
