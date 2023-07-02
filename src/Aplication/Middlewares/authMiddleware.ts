import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";



export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Não autorizado");
    }

    const token = authorization.split(" ")[1];

    

    jwt.verify(
      token,
      process.env.SECRET as string
    );

    next();
  } catch (error) {
    const erro = new Error("Não autorizado");
    next(erro);
  }
};