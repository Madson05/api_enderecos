import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class errorMiddleware{
    public async handle(error: Error, req: Request, res: Response, next: NextFunction): Promise<Response | void> {

        if (error instanceof ZodError) {
          res.status(400).json({
            status: 400,
            mensagem: error.issues[0].message,
          });
        }

        if(error instanceof Error){
            return res.status(400).json({
                status: 400,
                mensagem: error.message
            });
        }

        return res.status(500).json({
            status: 500,
            mensagem: "Erro interno no servidor"
        });
    }
}

export default new errorMiddleware();