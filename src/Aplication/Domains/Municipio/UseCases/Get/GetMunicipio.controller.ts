import { Request, Response } from "express";
import { GetMunicipioService } from "./GetMunicipio.service";
import { getMunicipioSchema } from "./Schemas/GetMunicipio.schema";

class GetMunicipioController {
  constructor(private getMunicipioService: GetMunicipioService) {}

  handle = async (request: Request, response: Response) => {
    const municipio = getMunicipioSchema.parse(request.query);

    response.send(await this.getMunicipioService.execute(municipio));
  }

}


export default GetMunicipioController;