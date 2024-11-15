// src/index.ts
import express from 'express';
import sequelize from './config/db'; // Certifique-se de que a configuração do sequelize está correta
import { router } from './routes'; // Importando as rotas

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parser de JSON
app.use(express.json());

// Usando o router para todas as rotas
app.use(router);

// Testar conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => console.log('Conexão com o banco de dados bem-sucedida!'))
  .catch((err) => console.error('Erro ao conectar ao banco:', err));

// Sincronizar os modelos (sem redundâncias)
sequelize.sync({ force: false }) // Evita recriar as tabelas a cada execução
  .then(() => console.log('Modelos sincronizados com sucesso!'))
  .catch((err) => console.error('Erro ao sincronizar os modelos:', err));

// Inicializando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
