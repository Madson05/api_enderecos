import { Request, Response } from "express";
import DeleteUFService from "./DeleteUF.service";

class DeleteUFController{
  constructor(private readonly deleteUFService: DeleteUFService) {}

  handle = async (request: Request, response: Response): Promise<void> => {
    const { codigoUF } = request.params;
    
    response.status(200).send(await this.deleteUFService.execute(Number(codigoUF)));
  }
}

export default DeleteUFController