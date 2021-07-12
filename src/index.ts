const express = require('express');
import { gql } from 'apollo-server'
const { ApolloServer } = require('apollo-server-express');
// const { typeDefs, resolvers } = require('./schema');

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

  await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer().catch(err => console.error(err))