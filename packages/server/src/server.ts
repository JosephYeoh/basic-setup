import { readFileSync } from 'fs';
import glob from 'glob';
import { ApolloServer, gql } from 'apollo-server';
import { env } from './data/util/config';

// Setting process.env
Object.keys(env).map((key) => {
  process.env[key] = env[key];
});

// Collect all *.schema.gql files for type defintion
const typeDefs = glob
  .sync(`${__dirname}/**/*.schema.gql`)
  .map((p: any) => readFileSync(p).toString());

// Collect all *.resolver.ts files for resolver definition
const resolvers = glob
  .sync(`${__dirname}/**/*.resolver.ts`)
  .map((myPath: any) => require(myPath).Resolvers);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
