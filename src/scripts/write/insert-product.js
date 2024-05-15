//import WriteData from "../../config/database/write-database.js";
import { ReadProductRepository } from "../read/read-product.js";
import { InsertProductRepository } from "./insert-repository.js";
import { arrayProducts } from "./mock-data.js";

const insertProduct = async (item) => {
  const productRepository = new InsertProductRepository();
  const result = await productRepository.insert(item);
  console.log("INSERT -> \n ", {result});

  const readProductRepository = new ReadProductRepository();
  await readProductRepository.getTenItens(107)
}

export const insertProductWithOneSecondAwait = (index) => {
  if (index < arrayProducts.length) {
    insertProduct(arrayProducts[index]);
    setTimeout(() => {
      insertProductWithOneSecondAwait(index + 1);
    }, 1000)
  }
}

