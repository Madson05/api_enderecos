import { Request, Response } from "express";
import UpdateUFService from "./UpdateUF.service";
import { updateUFSchema, UpdateUFType } from "./schemas/UpdateUF.shema";
import UFEntity from "../../../../Entities/UFEntity";

class UpdateUFController{
  constructor(private readonly updateUFService: UpdateUFService) {}

  handle = async (request: Request, response: Response): Promise<any> => {
    const UF: UpdateUFType = updateUFSchema.parse(request.body);

    response.status(200).send(await this.updateUFService.execute(UF));
  }
}

export default UpdateUFController;