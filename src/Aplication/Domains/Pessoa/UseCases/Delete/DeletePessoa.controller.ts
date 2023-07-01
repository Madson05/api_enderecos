import { Request, Response } from "express";
import DeletePessoaService from "./DeletePessoa.service";

class DeletePessoaController{
  constructor(private readonly deletePessoaService: DeletePessoaService) {}

  handle = async (request: Request, response: Response): Promise<any> => {
    const { codigoPessoa } = request.params;
    
    response.status(200).send(await this.deletePessoaService.execute(Number(codigoPessoa)));
  }
}

export default DeletePessoaController;