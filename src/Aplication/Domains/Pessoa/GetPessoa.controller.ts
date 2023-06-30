import { Request, Response } from "express";
import GetPessoaService from "./GetPessoa.service";
import { GetPessoaSchema } from "./Schemas/GetPessoa.schema";

class GetPessoaController{
  constructor(private readonly getPessoaService: GetPessoaService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const data = GetPessoaSchema.parse(request.query);
    const result = await this.getPessoaService.execute(data);
    return response.status(200).json(result);
  }
}