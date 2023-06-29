import { Request, Response } from "express";
import GetBairroService from "./GetBairro.service";
import { GetBairroSchema, GetBairroType } from "./Schema/GetBairro.schema";

class GetBairroController{
  constructor (private readonly getBairroService: GetBairroService) {}

  handle = async (request: Request, response: Response): Promise<any> => {
    const data: GetBairroType = GetBairroSchema.parse(request.body);
    response.status(200).send(await this.getBairroService.execute(data));
  }
}

export default GetBairroController;