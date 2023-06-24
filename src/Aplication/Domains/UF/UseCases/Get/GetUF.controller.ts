import { Request, Response } from "express";
import CreateUFService from "../Create/CreateUF.service";
import GetUFService from "./GetUF.service";

class GetUFController{
  constructor(private readonly getUFService: GetUFService) {}

  async handle(request: Request, response: Response): Promise<any> {
    const { query } = request;

    response.status(200).send(await this.getUFService.execute(query));
    
  }

}