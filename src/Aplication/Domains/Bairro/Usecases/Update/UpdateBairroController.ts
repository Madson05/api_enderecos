import { NextFunction, Request, Response } from "express";
import UpdateBairroService from "./UpdateBairro.service";
import { UpdateBairroSchema } from "./Schemas/UpdateBairro.schema";

class UpdatebairroController {
  constructor(private readonly updateBairroService: UpdateBairroService) {}

  handle = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const bairro = UpdateBairroSchema.parse(request.body);

      response.send(await this.updateBairroService.execute(bairro));
    } catch (error) {
      next(error);
    }
  };
}

export default UpdatebairroController;
