import { Request, Response } from "express";
import UpdateStatusMunicipioService from "./UpdateStatusMunicipio.service";

class UpdateStatusMunicipioController{
  constructor(private updateStatusMunicipioService: UpdateStatusMunicipioService){};

  handle = async (request: Request, response: Response): Promise<any> => {
    const { codigoMunicipio } = request.params;

    response.status(200).send(await this.updateStatusMunicipioService.execute(Number(codigoMunicipio)));
  }
}

export default UpdateStatusMunicipioController;