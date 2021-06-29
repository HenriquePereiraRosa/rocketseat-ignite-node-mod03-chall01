import { Request, Response } from "express";
import { container } from 'tsyringe';
import { FindUsersByGameIdUseCase } from "./FindUsersByGameIdUseCase";
import { AppError } from "../../../../errors/AppError";
import { Msg } from "../../../../errors/ErrorMessages";

class FindUsersByGameIdController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id }: string = request.query;
    if (!id) {
      throw new AppError(Msg.ParamCannotBeNull, ['id']);
    }

    const useCase = container.resolve(FindUsersByGameIdUseCase);
    const ret = await useCase.execute(id);

    if (!ret) {
      throw new AppError(Msg.NotFound);
    }
    return response.json(ret);
  }
}

export { FindUsersByGameIdController };
