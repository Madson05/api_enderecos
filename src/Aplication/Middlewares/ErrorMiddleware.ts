import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class errorMiddleware{
    public async handle(error: Error, req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        if (error instanceof ZodError) {
            if((error.issues[0].code === "invalid_type") && (error.issues[0].message === "Required")){
                return res.status(400).json({
                    mensagem: `O campo ${error.issues[0].path[0]} deve ser do tipo ${error.issues[0].expected} e é obrigatório`,
                    status: 400,
                });
            }
            if(error.issues[0].code === "invalid_type"){
                return res.status(400).json({
                    mensagem: `O campo ${error.issues[0].path[0]} deve ser do tipo ${error.issues[0].expected}`,
                    status: 400,
                });
            }
          return res.status(400).json({
              mensagem: error.issues[0].message,
              status: 400,
          });
        }

        if(error instanceof Error){
            return res.status(400).json({
                mensagem: error.message,
                status: 400,
            });
        }

        return res.status(500).json({
            mensagem: "Erro interno no servidor",
            status: 500,
        });
    }
}

export default new errorMiddleware();