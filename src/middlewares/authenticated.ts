import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ILogin } from "../interfaces/auth";  // Importa a interface do payload do JWT


declare module "express" {
  export interface Request {
    user?: ILogin;
  }
}
export const authenticated = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    res.status(401).send({ message: "auth.error.missing_token" });
    return;  // Certifique-se de retornar após enviar a resposta
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET || "u8IopWs4JdPhOMkrU5CUJkGaUcb0Y0rHkkogEbUF" ) as ILogin;
    req.user = decoded;  // Associa o 'user' à requisição
    next();  // Continua para o próximo middleware
  } catch (error) {
    res.status(401).send({ message: "auth.error.invalid", error });
  }
};
