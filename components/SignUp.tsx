import React from 'react';
import {Text, TextInput, View} from 'react-native';

export default function SignUp() {
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (inputType, e) => {
    setUser({...user, [inputType]: e.nativeTarget.value});
  };

  return (
    <View>
      <TextInput value={user.name} onChange={e => handleChange('name', e)} />
    </View>
  );
}
