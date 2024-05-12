//faz a comunicação com o banco de leitura
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
})

