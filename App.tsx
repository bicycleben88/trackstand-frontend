import 'react-native-gesture-handler';
import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';
import {client} from './lib/withData';
import DeleteBikeRide from './components/DeleteBikeRide';
import UpdateBikeRide from './components/UpdateBikeRide';
import CreateBikeRide from './components/CreateBikeRide';
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
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Create Bike Ride" component={CreateBikeRide} />
          <Stack.Screen name="Delete Bike Ride" component={DeleteBikeRide} />
          <Stack.Screen name="Update Bike Ride" component={UpdateBikeRide} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
