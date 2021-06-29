import { Request, Response } from "express";
import { container } from 'tsyringe';
import { FindByTitleContainingUseCase } from "./findByIdWithGamesUseCase";
import { AppError } from "../../../../errors/AppError";
import { Msg } from "../../../../errors/ErrorMessages";

class FindByTitleContainingController {

  async handle(request: Request, response: Response): Promise<Response> {
      const { title }: string = request.query;
      if(!title) {
        throw new AppError(Msg.ParamCannotBeNull, ['title']);
      }

      const useCase = container.resolve(FindByTitleContainingUseCase);
      const ret = await useCase.execute(title);
      
    if(!ret) {
      throw new AppError(Msg.NotFound);
    }
      return response.json(ret);
  }
}

export { FindByTitleContainingController };
