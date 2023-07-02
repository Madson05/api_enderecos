import { NextFunction, Request, Response } from "express";
import GetPessoaService from "./GetPessoa.service";
import { GetPessoaSchema } from "./Schemas/GetPessoa.schema";

class GetPessoaController{
  constructor(private readonly getPessoaService: GetPessoaService) {}

  handle = async (request: Request, response: Response, next: NextFunction) => {
    try{
      const data = GetPessoaSchema.parse(request.query);
    const result = await this.getPessoaService.execute(data);
    return response.status(200).json(result);
    }catch(error){
      next(error);
    }
  }
}

export default GetPessoaController;