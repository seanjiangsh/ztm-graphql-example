import * as productsModel from "./products.model";

const productResolvers = {
  Query: {
    products: () => productsModel.getAllProducts(),
    productsByPrice: (parent: any, args: { min: number; max: number }) => {
      const { min, max } = args;
      return productsModel.getProductsByPrice(min, max);
    },
    productsById: (parent: any, args: { id: string }) =>
      productsModel.getProductsById(args.id),
  },
};

export default productResolvers;
