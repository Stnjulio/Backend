// src/middlewares/authenticated.ts
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ILogin } from "../interfaces/auth";

export const authenticated = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    res.status(401).send({ message: "auth.error.missing_token" });
    return; // Certifique-se de retornar após enviar uma resposta
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET || "your-secret-key") as ILogin;
    req.user = decoded;
    next(); // Continua para o próximo middleware
  } catch (error) {
    res.status(401).send({ message: "auth.error.invalid", error });
  }
};
