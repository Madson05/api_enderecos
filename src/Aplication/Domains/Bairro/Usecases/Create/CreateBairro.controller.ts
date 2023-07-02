import { NextFunction, Request, Response } from "express";
import CreateBairroService from "./CreateBairro.service";
import { CreateBairroSchema } from "./Schemas/CreateBairro.schema";

class CreateBairroController{
  constructor(private readonly createBairroService: CreateBairroService) {}

  handle = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
    try{
      const data = CreateBairroSchema.parse(request.body);

      const result = await this.createBairroService.execute(data);

      return response.status(200).json(result);
    }catch(error){
      next(error);
    }
  }
}

export default CreateBairroController;