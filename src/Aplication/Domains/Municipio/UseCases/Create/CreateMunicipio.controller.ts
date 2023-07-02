import { NextFunction, Request, Response } from "express";
import CreateMunicipioService from "./CreateMunicipio.service";
import { CreateMunicipioSchema, CreateMunicipioType } from "./Schemas/CreateMunicipio.schema";

class CreateMunicipioController{

  constructor(private createMunicipioService: CreateMunicipioService){}

  handle = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
    try{
      const data: CreateMunicipioType = CreateMunicipioSchema.parse(request.body);
    response.status(200).send(await this.createMunicipioService.execute(data));
    }catch(error){
      next(error);
    }
  }
}

export default CreateMunicipioController