import { NextFunction, Request, Response } from "express";
import { CreateUFSchema } from "./Schemas/CreateUF.schema";
import CreateUFService from "./CreateUF.service";

class CreateUFController{

    constructor(private createUFService: CreateUFService){}

    handle = async (request: Request, response: Response, next: NextFunction) => {
        try{
            const UF = CreateUFSchema.parse(request.body);

            response.status(200).send(await this.createUFService.execute(UF));
        }catch(error){
            next(error);
        }
    }

}

export default CreateUFController;