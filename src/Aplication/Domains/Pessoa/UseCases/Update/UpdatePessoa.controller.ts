import { Request, Response } from "express";
import { UpdatePessoaType, updatePessoaSchema } from "./Schema/UpdatePessoa.schema";
import UpdatePessoaService from "./UpdatePessoa.service";

class UpdatePessoaController{
  constructor(private readonly updatePessoaService: UpdatePessoaService) {}

  handle = async (request: Request, response: Response): Promise<any> => {
    const data: UpdatePessoaType = updatePessoaSchema.parse(request.body);
    response.status(200).send(await this.updatePessoaService.execute(data));
  }
}

export default UpdatePessoaController;