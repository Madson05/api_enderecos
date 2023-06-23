import { Request, Response } from "express";
import { CreateUFSchema } from "./CreateUF.schema";
import CreateUFService from "./CreateUF.service";

class CreateUFController{
    async handle (request: Request, response: Response){
        const UF = CreateUFSchema.parse(request.body);

        CreateUFService.execute(UF)
        return response.status(201).json(UF);
        

    }

}

export default CreateUFController;