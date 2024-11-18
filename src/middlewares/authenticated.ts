import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ILogin } from "../interfaces/auth";
import { backend } from "../config/environment";

declare module "express" {
  export interface Request {
    user?: ILogin;
  }
}
export const authenticated = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    res.status(401).send({ message: "auth.error.missing_token" });
    return;
  }

  try {
    const decoded = verify(token, backend.jwt_secret ) as ILogin;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ message: "auth.error.invalid", error });
  }
};
