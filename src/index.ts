import express from "express";

import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";

const typeDefs = loadFilesSync("**/*", { extensions: ["graphql"] });
const resolvers = loadFilesSync("**/*", { extensions: ["resolvers.ts"] });

async function startApolloServer() {
  const app = express();
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(5000, () => {
    console.log("GraphQL server running on 5000");
  });
}

startApolloServer();
