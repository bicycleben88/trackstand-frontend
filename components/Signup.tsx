import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
export default function Signup() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e, name) => {
    const {text} = e.nativeEvent;
    setUser({...user, [name]: text});
  };

  return (
    <View style={globalStyles.header}>
      <TextInput
        placeholder="name"
        onChange={e => handleChange(e, 'name')}
        defaultValue={user.name}
      />
      <TextInput
        placeholder="email"
        onChange={e => handleChange(e, 'email')}
        defaultValue={user.email}
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
