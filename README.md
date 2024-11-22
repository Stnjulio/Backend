root/
├── migrations/             
│   └── scripts/             # Arquivos sql para migração
├── src/
│   ├── config/              # Configurações e inicializações globais
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   └── 
│   ├── controllers/         # Controladores (camada de entrada das rotas)
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   └── 
│   ├── interfaces/          # Tipagens e interfaces globais
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   └── 
│   ├── middlewares/         # Middlewares de rotas e requisições
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   └── 
│   ├── models/              # Modelos Sequelize e relações
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   └── 
│   ├── routes/              # Rotas da API
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   └── 
│   ├── services/            # Camada de negócio e lógica complexa
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   └── 
│   └── index.ts             # Ponto de entrada da aplicação
├── .env                     # Configuração de variáveis de ambiente
├── .gitignore               # Ignorar arquivos não versionados
├── .eslintconfig.js         # Configuração do ESLint
├── .prettierrc.json         # Configuração do Prettier
├── package.json             # Gerenciador de dependências e scripts
├── tsconfig.json            # Configuração do TypeScript
├── yarn.lock                # Arquivo de controle do Yarn
└── README.md                # Documentação do projeto




Arquivo .env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=admin
DB_NAME=db_tasks
DB_DIALECT=mysql
PORT=3000
SECRET=u8IopWs4JdPhOMkrU5CUJkGaUcb0Y0rHkkogEbUF
FRONTEND_URL=http://localhost:4200/

npm install
yarn install
yarn db:create "nome do seu banco"
yarn db:migrate 
yarn dev


Documentação do Backend
Este documento descreve o processo de instalação, configuração e inicialização do backend do projeto.

Pré-requisitos
Antes de começar, certifique-se de ter os seguintes softwares instalados no seu ambiente de desenvolvimento:

Node.js (versão LTS recomendada)
Yarn (gerenciador de pacotes)
MySQL (ou qualquer outro banco de dados configurado no projeto)
Passo a Passo
1. Instalar as dependências
Após clonar o repositório, navegue até o diretório do backend e execute o seguinte comando para instalar as dependências do projeto:

bash
 
npm install
ou, se preferir usar Yarn:

bash
 
yarn install
2. Configurar o Banco de Dados
Antes de criar o banco, verifique o arquivo de configuração do Sequelize (config/database.js ou similar) e ajuste as credenciais do banco de dados conforme necessário. Exemplos de credenciais comuns:

json
 
{
  "development": {
    "username": "root",
    "password": "sua_senha",
    "database": "nome_do_banco",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
3. Criar o Banco de Dados
Para criar o banco de dados, execute o seguinte comando no terminal:

bash
 
yarn db:create "nome_do_seu_banco"
Este comando utiliza a configuração definida no arquivo do Sequelize para criar o banco.

4. Executar as Migrações
Depois que o banco de dados foi criado, é necessário aplicar as migrações para criar as tabelas:

bash
 
yarn db:migrate
As migrações irão configurar automaticamente as tabelas e relacionamentos definidos no projeto.

5. Inicializar o Servidor
Após configurar o banco de dados e aplicar as migrações, inicie o servidor backend com o comando:

bash
 
yarn dev
O servidor será iniciado e estará disponível no endereço configurado (geralmente http://localhost:3000).

Resumo de Comandos
Aqui está um resumo dos comandos para facilitar o uso:

Instalar dependências: npm install ou yarn install
Criar banco de dados: yarn db:create "nome_do_seu_banco"
Aplicar migrações: yarn db:migrate
Iniciar o servidor: yarn dev
Dúvidas Frequentes
Erro ao conectar ao banco de dados:

Verifique as credenciais de conexão no arquivo de configuração.
Certifique-se de que o MySQL está em execução.
Comando yarn db:create não encontrado:

Certifique-se de que o script correspondente está definido no package.json.
Alterar porta ou host do servidor:

Verifique as variáveis de ambiente no arquivo .env (se configurado) ou diretamente no código do servidor.