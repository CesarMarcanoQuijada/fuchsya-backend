import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, Query, Mutation } from './graphql';


async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
    },
  });
  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve: any) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer().catch((err) => console.error(err));
