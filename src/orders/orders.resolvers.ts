import * as ordersModel from "./orders.model";

const orderResolvers = {
  Query: {
    orders: () => ordersModel.getAllOrders(),
  },
};

export default orderResolvers;
