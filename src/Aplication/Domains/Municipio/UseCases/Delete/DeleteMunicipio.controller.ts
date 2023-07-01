import { Request, Response } from "express";
import DeleteMunicipioService from "./DeleteMunicipio.service";

class DeleteMunicipioController {
  constructor(
    private readonly deleteMunicipioService: DeleteMunicipioService
  ) {}

  handle= async (request: Request, response: Response) => {
    const { codigoMunicipio } = request.params;
    
    response.status(200).send(await this.deleteMunicipioService.execute(Number(codigoMunicipio)));
  }
}

export default DeleteMunicipioController;
