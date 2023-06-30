import { Request, Response } from "express";
import UpdateBairroService from "./UpdateBairro.service";
import { UpdateBairroSchema } from "./Schemas/UpdateBairro.schema";

class UpdatebairroController{
  constructor(private readonly updateBairroService: UpdateBairroService) {}

  handle = async (request: Request, response: Response): Promise<any> => {
      
      const bairro = UpdateBairroSchema.parse(request.body);
  
      response.send(await this.updateBairroService.execute(bairro));
    }
}