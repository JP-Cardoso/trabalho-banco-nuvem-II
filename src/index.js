import { readDb } from "./config/database/read-database.js";
import { writeDb } from "./config/database/write-database.js";
import { insertProductWithOneSecondAwait } from "./scripts/write/insert-product.js";

const main = async () => {
  try {
    await writeDb.authenticate();
    await readDb.authenticate();
    insertProductWithOneSecondAwait(0);
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();