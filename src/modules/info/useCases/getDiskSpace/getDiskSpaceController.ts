import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetDiskSpaceUseCase } from "./getDiskSpaceUseCase";

class GetDiskSpaceController {

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      console.log("GetDiskSpaceController");

      const useCase = container.resolve(GetDiskSpaceUseCase);
      return response.json(useCase.execute());

    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }
}

export { GetDiskSpaceController };
