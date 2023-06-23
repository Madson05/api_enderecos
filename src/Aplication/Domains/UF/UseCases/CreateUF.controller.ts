import { Request, Response } from "express"
import { CreateUFSchema } from "./CreateUF.schema";

class createUFController{
    async handle (request: Request, response: Response): Promise<Response> {
        const UF = CreateUFSchema.parse(request.body);
        return response.status(201).json(UF);
    }

}

export default new createUFController();