import { NextFunction, Request, Response } from "express";
import UpdateStatusService from "./UpdateStatus.service";

class UpdateStatusController{
  constructor(private readonly updateStatusService: UpdateStatusService) {}

  handle = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
    try{
      const { codigoPessoa } = request.params;
    
    response.status(200).send(await this.updateStatusService.execute(Number(codigoPessoa)));
    }catch(error){
      next
    }
  }
}

export default UpdateStatusController;