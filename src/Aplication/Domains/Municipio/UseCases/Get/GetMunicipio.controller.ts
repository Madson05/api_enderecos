import { Request, Response } from "express";
import { GetMunicipioService } from "./GetMunicipio.service";
import { getMunicipioSchema } from "./Schemas/GetMunicipio.schema";

class GetMunicipioController {
  constructor(private getMunicipioService: GetMunicipioService) {}

  public async handle(request: Request, response: Response) {
    const municipio = getMunicipioSchema.parse(request.query);

    const result = await this.getMunicipioService.execute(municipio);
  }

}
