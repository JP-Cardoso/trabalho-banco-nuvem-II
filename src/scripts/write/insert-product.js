import WriteData from "../../config/database/write-database.js";
// import readProduct from "../read/read-product.js";
import { arrayProducts } from "./mock-data.js";

const insertProduct = (item) => {
  console.log("opa");
  const result = WriteData.insert(item);
  console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=");
  console.log(result);
  console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=");

  // if (result > 10) {
  //   readProduct(10);
  // }
  // return;
}

let count = 0;

const insertProductWithInterval = setInterval(() => {
  if (count < arrayProducts) {
    console.log("opa");

    insertProduct(arrayProducts[count]);
  } else {
    clearInterval(insertProductWithInterval);
  }
}, 1000)

