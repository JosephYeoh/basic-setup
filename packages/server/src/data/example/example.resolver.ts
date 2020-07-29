// mocked db
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
];

export const Resolvers = {
  Query: {
    books: (_, {}, ctx) => {
      return books;
    }
  }
};
