import { Request, Response } from "express";
import CreatePessoaService from "./CreatePessoa.service";
import { CreateUsuarioType, createUsuarioSchema } from "./Schemas/CreatePessoa.schema";

class CreatePessoaController{
  constructor(private readonly createPessoaService: CreatePessoaService) {}

  handle = async (request: Request, response: Response): Promise<any> => {
    const data: CreateUsuarioType = createUsuarioSchema.parse(request.body);
    response.status(200).send(await this.createPessoaService.execute(data));
  }
}

export default CreatePessoaController;