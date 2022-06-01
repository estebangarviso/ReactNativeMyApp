import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import APP_ENV from '../config/env';
import ErrorBoundary from '../components/ErrorBoundary';

const Index = () => {
  const client = new ApolloClient({
    uri: APP_ENV.GRAPHQL_URL,
    cache: new InMemoryCache(),
  });
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </ErrorBoundary>
  );
};

// export default Sentry.wrap(Index);
export default Index;
