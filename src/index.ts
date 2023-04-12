import path from "path";
import express from "express";

import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";

import orders from "./orders/orders.model";
import products from "./products/products.model";

const typesArray = loadFilesSync("**/*", { extensions: ["graphql"] });
const schema = makeExecutableSchema({ typeDefs: [typesArray] });
const rootValue = { products, orders };

const app = express();
app.use("/graphql", graphqlHTTP({ schema, rootValue, graphiql: true }));

app.listen(5000, () => {
  console.log("GraphQL server running on 5000");
});
