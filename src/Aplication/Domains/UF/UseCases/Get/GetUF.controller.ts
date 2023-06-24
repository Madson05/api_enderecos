import { Request, Response } from "express";
import CreateUFService from "../Create/CreateUF.service";
import GetUFService from "./GetUF.service";
import { GetUFSchema, GetUFType } from "./schemas/getUF.schema";

class GetUFController{
  constructor(private readonly getUFService: GetUFService) {}

  async handle(request: Request, response: Response): Promise<any> {
    const query: GetUFType = GetUFSchema.parse(request.query);

    response.status(200).send(await this.getUFService.execute(query));
    
  }

}