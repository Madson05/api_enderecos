import { NextFunction, Request, Response } from "express";
import { GetMunicipioService } from "./GetMunicipio.service";
import { getMunicipioSchema } from "./Schemas/GetMunicipio.schema";

class GetMunicipioController {
  constructor(private getMunicipioService: GetMunicipioService) {}

  handle = async (request: Request, response: Response, next: NextFunction) => {
    try{
      const municipio = getMunicipioSchema.parse(request.query);

      response.send(await this.getMunicipioService.execute(municipio));
    }catch(error){
      next(error);
    }
  }

}


export default GetMunicipioController;