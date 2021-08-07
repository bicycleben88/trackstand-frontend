/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import React, {Node} from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

const client = new ApolloClient({
  uri: 'localhost:3000/graphql',
  cache: new InMemoryCache(),
});

const App: () => Node = () => {
  return (
    <ApolloProvider client={client}>
      <Button
        title="Log In"
        onPress={() => console.log('TO DO: make this button do something')}
      />
      <Button
        title="Sign Up"
        onPress={() => console.log('TO DO: make this button do something')}
      />
    </ApolloProvider>
  );
};

export default App;
