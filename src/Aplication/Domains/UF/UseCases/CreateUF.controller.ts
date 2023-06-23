import { Request, Response } from "express";
import { CreateUFSchema } from "./CreateUF.schema";
import CreateUFService from "./CreateUF.service";

class CreateUFController{

    constructor(private createUFService: CreateUFService){}

    async handle (request: Request, response: Response){
        const UF = CreateUFSchema.parse(request.body);

        response.status(200).send(await this.createUFService.execute(UF));
    }

}

export default CreateUFController;