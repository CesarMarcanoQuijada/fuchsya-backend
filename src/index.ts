import express from 'express';
import { gql } from 'apollo-server'
import { ApolloServer } from 'apollo-server-express';
// import { typeDefs, resolvers } from './graphql/index.ts';

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: gql`
    type Query {
        ping: String!
      }
    `,
    resolvers: {
        Query: {
            ping: () => 'pong'
        }
    },
  });
  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve: any) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer().catch(err => console.error(err))