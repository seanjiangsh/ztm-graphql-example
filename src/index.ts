import http from "http";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import { loadFilesSync } from "@graphql-tools/load-files";

const typeDefs = loadFilesSync("**/*", { extensions: ["graphql"] });
const resolvers = loadFilesSync("**/*", { extensions: ["resolvers.ts"] });

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await apolloServer.start();
  app.use(cors(), bodyParser.json(), expressMiddleware(apolloServer));

  httpServer.listen(5000, () => {
    console.log("GraphQL server running on 5000");
  });
}

startApolloServer();
