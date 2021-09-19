import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {containerStyles, globalStyles} from '../styles/globalStyles';
const {black, green, clear, white} = globalStyles;

export default function Home({navigation}) {
  return (
    <View style={containerStyles}>
      <View style={styles.buttonContainer}>
        <Button
          color={`${black}`}
          title="Log In"
          onPress={() => navigation.navigate('Log In')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color={`${black}`}
          title="Sign Up"
          onPress={() => navigation.navigate('Sign Up')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color={`${black}`}
          title="Dashboard"
          onPress={() => navigation.navigate('Dashboard')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: white,
    borderColor: clear,
    borderBottomColor: green,
    borderWidth: 2,
    marginBottom: 2,
  },
});
