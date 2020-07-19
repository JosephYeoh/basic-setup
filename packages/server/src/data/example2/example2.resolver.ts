// mocked db
const articles = [
  {
    title: 'Article of Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Article of Jurassic Park',
    author: 'Michael Crichton'
  }
];

export const Resolvers = {
  Query: {
    articles: (_, {}, ctx) => articles
  }
};
