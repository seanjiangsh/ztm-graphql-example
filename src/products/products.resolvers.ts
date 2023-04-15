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
  Mutation: {
    addNewProduct: (
      parent: any,
      args: { id: string; description: string; price: number }
    ) => {
      const { id, description, price } = args;
      return productsModel.addNewProduct(id, description, price);
    },
    addNewProductReview: (
      parent: any,
      args: { id: string; rating: number; comment?: string }
    ) => {
      const { id, rating, comment } = args;
      return productsModel.addNewProductReview(id, rating, comment);
    },
  },
};

export default productResolvers;
