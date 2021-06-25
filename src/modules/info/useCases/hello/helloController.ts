import { Request, Response } from "express";
import { container } from "tsyringe";
import { HelloUseCase } from "./helloUseCase";

class HelloController {

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      console.log("HelloController");

      const useCase = container.resolve(HelloUseCase);
      return response.json(useCase.execute());

    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }
}

export { HelloController };
