import { Request, Response } from "express";
import DeletePessoaService from "./DeletePessoa.service";

class DeletePessoaController{
  constructor(private readonly deletePessoaService: DeletePessoaService) {}

  handle = async (request: Request, response: Response): Promise<any> => {
    const { codigoPessoa } = request.params;
    await this.deletePessoaService.execute(Number(codigoPessoa));
    response.status(200).send();
  }
}

export default DeletePessoaController;