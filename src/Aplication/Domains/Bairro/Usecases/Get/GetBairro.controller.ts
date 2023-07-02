import { NextFunction, Request, Response } from "express";
import GetBairroService from "./GetBairro.service";
import { GetBairroSchema, GetBairroType } from "./Schema/GetBairro.schema";

class GetBairroController{
  constructor (private readonly getBairroService: GetBairroService) {}

  handle = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
    try{
      const data: GetBairroType = GetBairroSchema.parse(request.query);
      response.status(200).send(await this.getBairroService.execute(data));
    }catch(error){
      next(error);
    }
  }
}

export default GetBairroController;