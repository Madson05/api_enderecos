import { NextFunction, Request, Response } from "express";
import DeleteMunicipioService from "./DeleteMunicipio.service";

class DeleteMunicipioController {
  constructor(
    private readonly deleteMunicipioService: DeleteMunicipioService
  ) {}

  handle = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { codigoMunicipio } = request.params;

      response
        .status(200)
        .send(
          await this.deleteMunicipioService.execute(Number(codigoMunicipio))
        );
    } catch (error) {
      next(error);
    }
  };
}

export default DeleteMunicipioController;
