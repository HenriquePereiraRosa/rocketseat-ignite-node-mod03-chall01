import { Request, Response } from "express";
import { FindUserWithGamesByIdUseCase } from "./findUserWithGamesById-useCase";

class FindUserWithGamesByIdController {
  constructor(private findUserWithGamesByIdUseCase: FindUserWithGamesByIdUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    try {
      const allUsers = this.findUserWithGamesByIdUseCase.execute({ user_id: String(user_id) });
      return response.json(allUsers);
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }
}

export { FindUserWithGamesByIdController };