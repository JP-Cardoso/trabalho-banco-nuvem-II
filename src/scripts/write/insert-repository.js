import { Product } from "../../config/models/product-models.js"
export class InsertProductRepository {

  async insert(product) {
    try {
      const result = await Product.create(product);
      const product = {
        id: result.id,
        descricao: result.descricao,
        categoria: result.categoria,
        valor: result.valor,
        criado_por: result.criado_por
      }
      return product;
    } catch (error) {
      console.error("Erro ao inserir o produto ->", error);
    }
  }
}