root/
├── migrations/              # Arquivos de migração do banco (gerenciados pelo Sequelize)
├── src/
│   ├── config/              # Configurações e inicializações globais
│   │   ├── db.ts            # Conexão e configuração do Sequelize
│   │   ├── environment.ts   # Configuração do dotenv e variáveis de ambiente
│   │   ├── logger.ts        # Configuração de logs (ex: Winston, Pino)
│   │   └── index.ts         # Carrega e exporta todas as configs
│   ├── controllers/         # Controladores (camada de entrada das rotas)
│   │   ├── userController.ts
│   │   └── authController.ts
│   ├── interfaces/          # Tipagens e interfaces globais
│   │   ├── user.ts          # Interface para User
│   │   ├── auth.ts          # Interface para Auth
│   │   └── index.ts         # Exporta todas as interfaces
│   ├── middlewares/         # Middlewares de rotas e requisições
│   │   ├── authMiddleware.ts # Autenticação de rotas
│   │   ├── errorHandler.ts  # Tratamento global de erros
│   │   ├── rateLimiter.ts   # Limitação de requisições
│   │   └── index.ts         # Exporta todos os middlewares
│   ├── models/              # Modelos Sequelize e relações
│   │   ├── user.ts          # Modelo de User
│   │   ├── role.ts          # Modelo de Role
│   │   └── index.ts         # Registro e inicialização de todos os modelos
│   ├── overrides/           # Sobrescrições ou extensões de bibliotecas
│   │   └── express.d.ts     # Extensão de interfaces do Express (opcional)
│   ├── routes/              # Rotas da API
│   │   ├── userRoutes.ts    # Rotas para Users
│   │   ├── authRoutes.ts    # Rotas para Autenticação
│   │   └── index.ts         # Registro de todas as rotas
│   ├── services/            # Camada de negócio e lógica complexa
│   │   ├── userService.ts   # Regras e lógica de negócio para Users
│   │   ├── authService.ts   # Regras e lógica de negócio para autenticação
│   │   └── index.ts         # Exporta todos os serviços
│   ├── types/               # Tipos globais TypeScript
│   │   ├── express.d.ts     # Definições globais para Express
│   │   ├── sequelize.d.ts   # Extensões de tipagem para Sequelize
│   │   └── index.ts         # Centraliza as definições de tipos
│   └── index.ts             # Ponto de entrada da aplicação
├── .env                     # Configuração de variáveis de ambiente
├── .env.example             # Exemplo de configuração para .env
├── .gitignore               # Ignorar arquivos não versionados
├── .eslintconfig.js         # Configuração do ESLint
├── .prettierrc.json         # Configuração do Prettier
├── package.json             # Gerenciador de dependências e scripts
├── tsconfig.json            # Configuração do TypeScript
├── yarn.lock                # Arquivo de controle do Yarn
└── README.md                # Documentação do projeto