import React from 'react';
import {View, Button} from 'react-native';
import {containerStyles} from '../styles/globalStyles';

export default function Home({navigation}) {
  return (
    <View style={containerStyles}>
      <Button title="Log In" onPress={() => navigation.navigate('Log In')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Sign Up')} />
      <Button
        title="Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
}
