import React from 'react';
import {View, Button} from 'react-native';
import {containerStyles, white} from '../styles/globalStyles';

export default function Home({navigation}) {
  return (
    <View style={containerStyles}>
      <Button
        color={`${white}`}
        title="Log In"
        onPress={() => navigation.navigate('Log In')}
      />
      <Button
        color={`${white}`}
        title="Sign Up"
        onPress={() => navigation.navigate('Sign Up')}
      />
      <Button
        color={`${white}`}
        title="Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
}
