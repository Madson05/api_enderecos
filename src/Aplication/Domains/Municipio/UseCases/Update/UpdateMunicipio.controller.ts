import { NextFunction, Request, Response } from "express";
import UpdateMunicipioService from "./UpdateMunicipio.service";
import { UpdateMunicipioSchema } from "./schemas/UpdateMunicipio.schema";

class UpdateMunicipioController {
  constructor(
    private readonly updateMunicipioService: UpdateMunicipioService
  ) {}

  handle = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const municipio = UpdateMunicipioSchema.parse(request.body);

      response.send(await this.updateMunicipioService.execute(municipio));
    } catch (error) {
      next(error);
    }
  };
}

export default UpdateMunicipioController;
