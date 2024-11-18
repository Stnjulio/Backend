// src/types/express/index.d.ts
import { ILogin } from "../interfaces/auth"; // ou o caminho correto da sua interface ILogin

declare global {
  namespace Express {
    interface Request {
      user?: ILogin;  // Agora, a propriedade 'user' deve estar acessível
    }
  }
}
