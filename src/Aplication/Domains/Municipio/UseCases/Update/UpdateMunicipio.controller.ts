import { Request, Response } from "express";
import UpdateMunicipioService from "./UpdateMunicipio.service";
import { UpdateMunicipioSchema } from "./schemas/UpdateMunicipio.schema";

class UpdateMunicipioController{
  constructor(private readonly updateMunicipioService: UpdateMunicipioService) {}

  handle = async (request: Request, response: Response): Promise<any> => {

    const municipio = UpdateMunicipioSchema.parse(request.body);

    response.send(await this.updateMunicipioService.execute(municipio));
  }
}

export default UpdateMunicipioController;