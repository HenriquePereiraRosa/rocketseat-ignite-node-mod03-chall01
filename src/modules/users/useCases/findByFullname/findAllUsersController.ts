import { Request, Response } from "express";
import { container } from 'tsyringe';
import { FindByFullnameUseCase } from "./findAllUsersUseCase";
import { IFindUserByFullNameDTO } from "../../model/dtos/userDTO";

class FindByFullnameController {

  async handle(request: Request, response: Response): Promise<Response> {
    try {

      const { first_name, last_name }: IFindUserByFullNameDTO = request.query;

      const useCase = container.resolve(FindByFullnameUseCase);
      const users = await useCase.execute({ first_name, last_name });
      console.log("-> CONTROLLER", users);
      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }
}

export { FindByFullnameController };
