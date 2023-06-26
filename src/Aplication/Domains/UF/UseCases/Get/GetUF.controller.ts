import { Request, Response } from "express";
import CreateUFService from "../Create/CreateUF.service";
import GetUFService from "./GetUF.service";
import { GetUFSchema, GetUFType } from "./schemas/getUF.schema";

class GetUFController {
  constructor(private readonly getUFService: GetUFService) {}

  handle = async (request: Request, response: Response): Promise<any> => {
    let UF: GetUFType = request.query;
    UF.codigo_UF = Number(UF.codigo_UF);

    const data: GetUFType = GetUFSchema.parse(request.query);

    response.status(200).send(await this.getUFService.execute(data));
  };
}

export default GetUFController;