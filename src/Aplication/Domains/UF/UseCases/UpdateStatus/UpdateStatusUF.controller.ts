import { Request, Response } from "express";

import UpdateStatusUFService from "./UpdateStatusUF.service";

class UpdateStatusUFController{
  constructor(private readonly updateStatusUFService: UpdateStatusUFService) {}

  async handle(request: Request, response: Response){
    const { codigoUF } = request.params;

    try{
      const result = await this.updateStatusUFService.execute(Number(codigoUF));
      return response.status(200).json(result);
    }catch(error){
      return response.status(400).json("erro");
    }
  }
}

export default UpdateStatusUFController;