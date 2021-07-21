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
        onChange={e => handleChange(e, 'username')}
        defaultValue={user.username}
      />
      <TextInput
        placeholder="password"
        onChange={e => handleChange(e, 'password')}
        defaultValue={user.password}
        secureTextEntry={true}
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
