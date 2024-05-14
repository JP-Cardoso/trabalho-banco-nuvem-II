import { writeDb } from "./config/database/write-database.js";
import { Product } from "./config/models/product-models.js";
const main = async () => {
  try {
    await writeDb.authenticate();
    await test();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();

async function test() {
  const produto = {
    descricao: 'Camiseta estampada',
    categoria: 'Roupas',
    valor: 29.99, 
    criado_por: 'Armazém de Ideias'
  }

  await Product.create(produto)
}