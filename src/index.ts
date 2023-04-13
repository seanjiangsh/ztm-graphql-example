import express from "express";

import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";

const typeDefs = loadFilesSync("**/*", { extensions: ["graphql"] });
const resolvers = loadFilesSync("**/*", { extensions: ["resolvers.ts"] });
const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(5000, () => {
  console.log("GraphQL server running on 5000");
});
