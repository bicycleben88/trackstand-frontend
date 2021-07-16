import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Signup() {
  return (
    <View style={styles.signupContainer}>
      <Text>This is the Sign Up Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  signupContainer: {
    backgroundColor: 'black',
    color: 'white',
  },
});
