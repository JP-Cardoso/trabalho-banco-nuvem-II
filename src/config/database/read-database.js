import { Sequelize } from "sequelize";

export const readDb = new Sequelize(
  {
    dialect: 'mysql',
    host: 'localhost',
    database: 'your_database_name',
    username: 'your_username',
    password: 'your_'
  }
)