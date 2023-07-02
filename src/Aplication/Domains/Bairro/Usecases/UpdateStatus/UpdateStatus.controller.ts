import { NextFunction, Request, Response } from "express";
import UpdateStatusService from "./UpdateStatus.service";

class UpdateStatusController{
  constructor(private readonly updateStatusService: UpdateStatusService) {}

  handle = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
    try{
      const { codigoBairro } = request.params;
      response.status(200).send(await this.updateStatusService.execute(Number(codigoBairro)));
    }catch(error){
      next(error);
    }
  }
}

export default UpdateStatusController;