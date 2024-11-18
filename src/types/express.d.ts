// src/types/express/index.d.ts
import { ILogin } from "../interfaces/auth";

declare global {
  namespace Express {
    interface Request {
      user?: ILogin;
    }
  }
}
