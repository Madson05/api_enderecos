import { NextFunction, Request, Response } from "express";
import UpdateStatusMunicipioService from "./UpdateStatusMunicipio.service";

class UpdateStatusMunicipioController{
  constructor(private updateStatusMunicipioService: UpdateStatusMunicipioService){};

  handle = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
    try{
      const { codigoMunicipio } = request.params;

    response.status(200).send(await this.updateStatusMunicipioService.execute(Number(codigoMunicipio)));
    }catch(error){
      next(error);
    }
  }
}

export default UpdateStatusMunicipioController;