import { NextFunction, Request, Response } from "express";
import UpdateUFService from "./UpdateUF.service";
import { updateUFSchema, UpdateUFType } from "./schemas/UpdateUF.shema";
import UFEntity from "../../../../Entities/UFEntity";

class UpdateUFController{
  constructor(private readonly updateUFService: UpdateUFService) {}

  handle = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
    try{
      const UF: UpdateUFType = updateUFSchema.parse(request.body);

    response.status(200).send(await this.updateUFService.execute(UF));
    }catch(error){
      next(error)
    }
  }
}

export default UpdateUFController;