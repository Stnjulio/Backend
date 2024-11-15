// src/index.ts
import express from 'express';
import sequelize from './config/db';
import { router } from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(router);

sequelize
  .authenticate()
  .then(() => console.log('Conexão com o banco de dados bem-sucedida!'))
  .catch((err) => console.error('Erro ao conectar ao banco:', err));

sequelize.sync({ force: false })
  .then(() => console.log('Modelos sincronizados com sucesso!'))
  .catch((err) => console.error('Erro ao sincronizar os modelos:', err));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
