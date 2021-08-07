import React from 'react';
import {View, Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Button
        title="Log In"
        onPress={() => console.log('TO DO: make this button do something')}
      />
      <Button title="Sign Up" onPress={() => navigation.navigate('Sign Up')} />
    </View>
  );
}
