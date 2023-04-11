import express from "express";
import {
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  buildSchema,
} from "graphql";
import { graphqlHTTP } from "express-graphql";

const schema = buildSchema(`
  type Query {
    products: [Product]
    orders: [Order]
  }

  type Product {
    id: ID!
    description: String!
    reviews: [Review]
    price: Float!
  }

  type Review {
    rating: Int!
    comment: String
  }

  type Order {
    data: String!
    subtotal: Float!
    items: [OrderItem]
  }

  type OrderItem {
    product: Product!
    quantity: Int!
  }
`);

const rootValue = {
  products: [
    { id: "redshoe", description: "Red Shoe", price: 42.12 },
    { id: "redshbulejeanoe", description: "Blue Jeans", price: 55.55 },
  ],
  orders: [
    {
      date: "2005-05-05",
      subtotal: 90.22,
      items: [
        {
          product: { id: "redshoe", description: "Old Red Shoe", price: 45.11 },
          quantity: 2,
        },
      ],
    },
  ],
};

const app = express();
app.use("/graphql", graphqlHTTP({ schema, rootValue, graphiql: true }));

app.listen(5000, () => {
  console.log("GraphQL server running on 5000");
});
