import { NextFunction, Request, Response } from "express";

class errorMiddleware{
    public async handle(error: Error, req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        if(error instanceof Error){
            return res.status(400).json({
                error: error.message
            });
        }

        return res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    }
}

export default new errorMiddleware();