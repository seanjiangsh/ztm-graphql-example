import * as productsModel from "./products.model";

const productResolvers = {
  Query: {
    products: () => productsModel.getAllProducts(),
  },
};

export default productResolvers;
