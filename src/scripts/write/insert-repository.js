import Product from "../../config/models/product-models";

export class InsertProductRepository {

  async insert(product) {
    const result = await Product.create(product);
    console.log(result);
  }
}