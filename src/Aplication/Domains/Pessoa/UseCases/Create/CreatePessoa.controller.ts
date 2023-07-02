import { NextFunction, Request, Response } from "express";
import CreatePessoaService from "./CreatePessoa.service";
import {
  CreateUsuarioType,
  createUsuarioSchema,
} from "./Schemas/CreatePessoa.schema";

class CreatePessoaController {
  constructor(private readonly createPessoaService: CreatePessoaService) {}

  handle = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: CreateUsuarioType = createUsuarioSchema.parse(request.body);
      response.status(200).send(await this.createPessoaService.execute(data));
    } catch (error) {
      next(error);
    }
  };
}

export default CreatePessoaController;
