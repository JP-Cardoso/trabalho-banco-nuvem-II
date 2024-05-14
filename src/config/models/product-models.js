import { Sequelize, DataTypes } from "sequelize";
import { writeDb } from "../database/write-database";

const db = writeDb();

export default Product = db.define(
  'product',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    descricao: {
      type: DataTypes.STRING(50),
      allownull: false
    },
    categoria: {
      type: DataTypes.STRING(10),
      allownull: false
    },
    valor: {
      type: DataTypes.DECIMAL(15, 2)
    },
    criado_em: {
      type: DataTypes.DATE
    },
    criado_por: {
      type: DataTypes.STRING(50),
      allownull: false
    }
  }
)