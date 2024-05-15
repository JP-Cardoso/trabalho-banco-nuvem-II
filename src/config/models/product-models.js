import { DataTypes } from "sequelize";
import { writeDb } from "../database/write-database.js";

export const Product = writeDb.define(
  'produto',
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
      type: DataTypes.DATE()
    },
    criado_por: {
      type: DataTypes.STRING(50),
      allownull: false
    }
  }, {
    tableName: 'produto',
    timestamps: false 
  }
)