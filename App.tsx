import 'react-native-gesture-handler';
import React from 'react';
import {ApolloProvider, InMemoryCache, ApolloClient} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
});

export default function App(): any {
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
          <Stack.Screen name="Log In" component={LogIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
