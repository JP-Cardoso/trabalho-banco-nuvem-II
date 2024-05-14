import WriteData from "../../config/database/write-database.js";
import { InsertProductRepository } from "./insert-repository.js";
import { arrayProducts } from "./mock-data.js";

const insertProduct = async (item) => {
  const productRepository = new InsertProductRepository();
  const result = await productRepository.insert(item);
  console.log("INSERT -> ", result);

  WriteData.read(result.id);
}

export const insertProductWithOneSecondAwait = (index) => {
  if (index < arrayProducts.length) {
    insertProduct(arrayProducts[index]);
    setTimeout(() => {
      insertProductWithOneSecondAwait(index + 1);
    }, 1000)
  }
}

insertProductWithOneSecondAwait(0);