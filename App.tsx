import 'react-native-gesture-handler';
import React from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import {Button, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import SignUp from './components/SignUp';

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'http://localhost:3000/',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Home'}}
          />
          <Stack.Screen name="Sign Up" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
