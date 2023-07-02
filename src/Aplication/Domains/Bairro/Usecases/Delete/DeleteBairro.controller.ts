import { NextFunction, Request, Response } from "express";
import DeleteBairroService from "./DeleteBairro.service";

class DeletebairroController{
  constructor(private readonly deleteBairroService: DeleteBairroService) {}

  handle = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
    try{
      const { codigoBairro } = request.params;
    
      response.status(200).send(await this.deleteBairroService.execute(Number(codigoBairro)));
    }catch(error){
      next(error);
    }
  }
}

export default DeletebairroController;