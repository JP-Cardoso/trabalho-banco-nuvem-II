import WriteData from "../../config/database/write-database.js";
// import readProduct from "../read/read-product.js";
import { arrayProducts } from "./mock-data.js";

const insertProduct = (item) => {
  const result = WriteData.insert(item);
  console.log("INSERT -> ", result);

  WriteData.read(result.id);
}

const insertProductWithOneSecondAwait = (index) => {
  if (index < arrayProducts.length) {
    insertProduct(arrayProducts[index]);
    setTimeout(() => {
      insertProductWithOneSecondAwait(index + 1);
    }, 1000)
  }
}

insertProductWithOneSecondAwait(0);