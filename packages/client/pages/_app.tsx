import { ApolloProvider } from '@apollo/client';
import { client } from 'lib/apollo';
import { NextComponentType, NextPageContext } from 'next';
import App from 'next/app';
import React from 'react';

interface PageBasedProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

const AppProviders: React.FC<PageBasedProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

class MyApp extends App {
  render() {
    return <AppProviders {...this.props} />;
  }
}

export default MyApp;
