import { NextFunction, Request, Response } from "express";
import DeletePessoaService from "./DeletePessoa.service";

class DeletePessoaController{
  constructor(private readonly deletePessoaService: DeletePessoaService) {}

  handle = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
    try{
      const { codigoPessoa } = request.params;
    
    response.status(200).send(await this.deletePessoaService.execute(Number(codigoPessoa)));
    }catch(error){
      next(error);
    }
  }
}

export default DeletePessoaController;