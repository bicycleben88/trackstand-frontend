import 'react-native-gesture-handler';
import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import BikeRides from './components/BikeRides';
import {client} from './lib/withData';
const Stack = createStackNavigator();

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
          <Stack.Screen name="Log In" component={LogIn} />
          <Stack.Screen name="Bike Rides" component={BikeRides} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
