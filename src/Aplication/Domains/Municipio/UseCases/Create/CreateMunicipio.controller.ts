import { Request, Response } from "express";
import CreateMunicipioService from "./CreateMunicipio.service";
import { CreateMunicipioSchema, CreateMunicipioType } from "./Schemas/CreateMunicipio.schema";

class CreateMunicipioController{

  constructor(private createMunicipioService: CreateMunicipioService){}

  handle = async (request: Request, response: Response): Promise<any> => {
    const data: CreateMunicipioType = CreateMunicipioSchema.parse(request.body);
    response.status(200).send(await this.createMunicipioService.execute(data));
  }
}