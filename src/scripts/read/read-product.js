import { Product } from "../../config/models/product-models.js";
import { Op } from 'sequelize';


export class ReadProductRepository {
  async getTenItens(index) {
    try {
      const products = await Product.findAll({
        where: {
          id: {
            [Op.lte]: index
          }
        },
        order: [
          ['id', 'DESC']
        ],
        limit: 10
      });
      await this.readTenItens(products);
    } catch (error) {
      console.error("Erro ao ler os produtos:", error);
    }
  }

  async readTenItens(products) {
    console.log("\n-=-=-=-=-==-=-=-=-=-= INÍCIO =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    for await (const product of products) {
      console.log(`${JSON.stringify(product.dataValues)}`);
    }
    console.log("-=-=-=-=-==-=-=-=-=-=-= FIM =-=-=-=-=-=-=-=-=-=-=-=-=-=-");
  }
}