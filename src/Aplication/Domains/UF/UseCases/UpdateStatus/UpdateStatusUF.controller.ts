import { NextFunction, Request, Response } from "express";

import UpdateStatusUFService from "./UpdateStatusUF.service";

class UpdateStatusUFController {
  constructor(private readonly updateStatusUFService: UpdateStatusUFService) {}

  handle = async (request: Request, response: Response, next: NextFunction) => {
    try{
      const { codigoUF } = request.params;

    const result = await this.updateStatusUFService.execute(Number(codigoUF));
    return response.status(200).json(result);
    }catch(error){
      next(error);
    }
  }
}

export default UpdateStatusUFController;
