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
    description: String
    price: Float
  }
`);

const rootValue = {
  description: "Red Shoe",
  price: 42.12,
};

const app = express();
app.use("/graphql", graphqlHTTP({ schema, rootValue, graphiql: true }));

app.listen(5000, () => {
  console.log("GraphQL server running on 5000");
});
