const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Configuração do readline para capturar a entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para pedir o nome do arquivo ao usuário
rl.question('Enter the name of the migration file: ', (filename) => {
  // Substituir espaços por pontos, como no script bash
  const formattedFilename = filename.replace(/ /g, '.');

  // Gerar o timestamp
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '');

  // Gerar o nome do arquivo final
  const migrationName = `${timestamp}.do.${formattedFilename}.sql`;

  // Caminho do diretório onde a migração será salva
  const migrationsPath = path.resolve(__dirname,  'scripts' );

  // Garantir que o diretório existe
  if (!fs.existsSync(migrationsPath)) {
    fs.mkdirSync(migrationsPath, { recursive: true });
  }

  // Criar o arquivo com o conteúdo inicial
  const filePath = path.join(migrationsPath, migrationName);
  fs.writeFileSync(filePath, '-- Write your SQL query here\n', 'utf8');

  console.log(`{Migration created: ${migrationName}}`);

  // Fechar o readline
  rl.close();
});
