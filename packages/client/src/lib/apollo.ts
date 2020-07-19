import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/',
  credentials: 'include',
  fetch: process.browser ? undefined : fetch
});

const client = new ApolloClient({
  link,
  cache,
  queryDeduplication: false,
  ssrMode: true
});

export default client;
