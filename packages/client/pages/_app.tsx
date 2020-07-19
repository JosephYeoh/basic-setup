import { NextComponentType, NextPageContext } from 'next';
import App from 'next/app';
import React from 'react';
import {ApolloProvider} from '@apollo/client';

import apolloClient from '../src/lib/apollo';

interface PageBasedProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

const AppProviders: React.FC<PageBasedProps> = props => {
  const { Component, pageProps } = props;
  return (
    <ApolloProvider client={apolloClient}>
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