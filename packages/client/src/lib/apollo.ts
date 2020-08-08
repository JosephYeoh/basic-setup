import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { env } from 'util/config';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/',
  credentials: 'include',
  fetch: process.browser ? undefined : fetch
});

// Setting process.env
Object.keys(env).map((key) => {
  process.env[key] = env[key];
});

export const client = new ApolloClient({
  link,
  cache,
  queryDeduplication: false,
  ssrMode: true
});
