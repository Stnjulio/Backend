// src/index.ts
import sequelize from './config/db';
import { authenticated } from './middlewares/authenticated';
import { router } from './routes';
import cors from 'cors';  // Importando o pacote cors
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Usando o middleware CORS para permitir requisições de origens externas
app.use(cors());  // Permite requisições de qualquer origem. Você pode personalizar isso depois.

// Usando o middleware para parsear o corpo das requisições como JSON
app.use(express.json());

// Adicionando as rotas da aplicação
app.use(router);

// Usando o middleware de autenticação (caso necessário)
// router.use(authenticated);

// Testando a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => console.log('Conexão com o banco de dados bem-sucedida!'))
  .catch((err) => console.error('Erro ao conectar ao banco:', err));

// Sincronizando os modelos com o banco de dados
sequelize.sync({ force: false })
  .then(() => console.log('Modelos sincronizados com sucesso!'))
  .catch((err) => console.error('Erro ao sincronizar os modelos:', err));

// Iniciando o servidor na porta configurada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
