import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function Signup() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e, name) => {
    const {text} = e.nativeEvent;
    setUser({...user, [name]: text});
  };

  return (
    <View style={styles.signupContainer}>
      <TextInput
        placeholder="username"
        onChange={e => handleChange(e, 'name')}
        defaultValue={user.username}
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
