import { Request, Response } from "express";
import { container } from 'tsyringe';
import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      console.log("CreateUserController");
      const { first_name, last_name, email} = request.body;
      
      console.log(first_name, last_name, email);
      const useCase = container.resolve(CreateUserUseCase);
      console.log("IS RESOLVING?:", useCase);    
      return response.json(useCase.execute({ first_name, last_name, email}));
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error });
    }
  }
}

export { CreateUserController };
