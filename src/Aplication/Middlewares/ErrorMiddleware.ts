import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class errorMiddleware{
    public async handle(error: Error, req: Request, res: Response, next: NextFunction): Promise<Response | void> {

        if (error instanceof ZodError) {
            if((error.issues[0].code === "invalid_type") && (error.issues[0].message === "Required")){
                return res.status(400).json({
                    status: 400,
                    mensagem: `O campo ${error.issues[0].path[0]} deve ser do tipo ${error.issues[0].expected} e é obrigatório`,
                });
            }
            if(error.issues[0].code === "invalid_type"){
                return res.status(400).json({
                    status: 400,
                    mensagem: `O campo ${error.issues[0].path[0]} deve ser do tipo ${error.issues[0].expected}`,
                });
            }
          return res.status(400).json({
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