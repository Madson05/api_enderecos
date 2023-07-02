import { Request, Response } from "express";
import UpdateStatusService from "./UpdateStatus.service";

class UpdateStatusController{
  constructor(private readonly updateStatusService: UpdateStatusService) {}

  handle = async (request: Request, response: Response): Promise<any> => {
    const { codigoPessoa } = request.params;
    
    response.status(200).send(await this.updateStatusService.execute(Number(codigoPessoa)));
  }
}

export default UpdateStatusController;