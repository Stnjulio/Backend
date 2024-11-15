const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');

// Configuração do banco de dados (substitua com suas credenciais)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'db_tasks',
});

// Função para executar as migrações SQL
const runMigrations = () => {
  // Caminho para o diretório de migrações
  const migrationsDir = path.resolve(__dirname, 'scripts');

  // Lê os arquivos de migração no diretório
  fs.readdirSync(migrationsDir).forEach(file => {
    if (file.endsWith('.sql')) {
      const migrationFilePath = path.join(migrationsDir, file);
      
      // Lê o conteúdo do arquivo SQL
      const sql = fs.readFileSync(migrationFilePath, 'utf8');
      
      console.log(`Executing migration: ${file}`);

      // Executa a migração no banco de dados
      connection.query(sql, (err, results) => {
        if (err) {
          console.error(`Error executing migration ${file}:`, err);
        } else {
          console.log(`Migration ${file} executed successfully.`);
        }
      });
    }
  });
  
  // Fecha a conexão com o banco de dados após as migrações
  connection.end();
};

// Executa as migrações
runMigrations();
