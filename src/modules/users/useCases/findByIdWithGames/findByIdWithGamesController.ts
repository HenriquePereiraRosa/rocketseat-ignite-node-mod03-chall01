import { Request, Response } from "express";
import { container } from 'tsyringe';
import { FindByIdWithGamesUseCase } from "./findByIdWithGamesUseCase";
import { IFindUserWithGamesDTO } from "../../model/dtos/userDTO";
import { AppError } from "../../../../errors/AppError";
import { Msg } from "../../../../errors/ErrorMessages";

class FindByIdWithGamesController {

  async handle(request: Request, response: Response): Promise<Response> {
      const { user_id }: IFindUserWithGamesDTO = request.query;
      if(!user_id) {
        throw new AppError(Msg.ParamCannotBeNull, ['user_id']);
      }

      const useCase = container.resolve(FindByIdWithGamesUseCase);
      const ret = await useCase.execute({ user_id });
      
    if(!ret) {
      throw new AppError(Msg.NotFound);
    }
      return response.json(ret);
  }
}

export { FindByIdWithGamesController };
