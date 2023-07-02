import { Request, Response } from "express";

import UpdateStatusUFService from "./UpdateStatusUF.service";

class UpdateStatusUFController {
  constructor(private readonly updateStatusUFService: UpdateStatusUFService) {}

  handle = async (request: Request, response: Response) => {
    const { codigoUF } = request.params;

    const result = await this.updateStatusUFService.execute(Number(codigoUF));
    return response.status(200).json(result);
  }
}

export default UpdateStatusUFController;
