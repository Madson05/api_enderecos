import { NextFunction, Request, Response } from "express";
import { UpdatePessoaType, updatePessoaSchema } from "./Schema/UpdatePessoa.schema";
import UpdatePessoaService from "./UpdatePessoa.service";

class UpdatePessoaController{
  constructor(private readonly updatePessoaService: UpdatePessoaService) {}

  handle = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
    try{
      const data: UpdatePessoaType = updatePessoaSchema.parse(request.body);
    response.status(200).send(await this.updatePessoaService.execute(data));
    }catch(error){
      next(error);
    }
  }
}

export default UpdatePessoaController;