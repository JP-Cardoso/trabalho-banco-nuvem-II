import { Sequelize } from "sequelize";
export const readDb = new Sequelize(
  'your_database_name', // Nome do banco de dados
  'your_username', // Nome de usuário
  'your_password', // Senha do banco de dados
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
