import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TextInput, View} from 'react-native';

export default function SignUp() {
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (inputType, e) => {
    setUser({...user, [inputType]: e.nativeEvent.text});
  };

  return (
    <View>
      <TextInput
        style={styles.form}
        value={user.name}
        onChange={e => handleChange('name', e)}
        placeholder="name"
      />
      <TextInput
        style={styles.form}
        value={user.email}
        onChange={e => handleChange('email', e)}
        placeholder="email"
      />
      <TextInput
        style={styles.form}
        value={user.password}
        onChange={e => handleChange('password', e)}
        placeholder="password"
        secureTextEntry={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    borderColor: 'black',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
