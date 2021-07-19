import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function Signup() {
  const [text, setText] = useState('');
  return (
    <View style={styles.signupContainer}>
      <TextInput
        placeholder="username"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  signupContainer: {
    backgroundColor: 'black',
    color: 'white',
  },
});
