import { Queries as Query } from './queries';
import { Mutations as Mutation } from './mutations';
import path from 'path';
import { readFileSync } from 'fs';

const typeDefs = readFileSync(
  path.join(__dirname, "schema.graphql")
).toString("utf-8");

export {
    Query,
    Mutation,
    typeDefs,
}
