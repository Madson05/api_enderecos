import { NextFunction, Request, Response } from "express";
import DeleteUFService from "./DeleteUF.service";

class DeleteUFController{
  constructor(private readonly deleteUFService: DeleteUFService) {}

  handle = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try{
      const { codigoUF } = request.params;
    
    response.status(200).send(await this.deleteUFService.execute(Number(codigoUF)));
    }
    catch(error){
      next(error);
    }
  }
}

export default DeleteUFController