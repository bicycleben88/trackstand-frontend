import {gql, useMutation} from '@apollo/client';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button, TextInput, View} from 'react-native';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: {email: $email, name: $name, password: $password}) {
      id
      email
      name
    }
  }
`;

export default function SignUp() {
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const [signup, {data, loading, error}] = useMutation(SIGNUP_MUTATION, {
    variables: user,
  });

  const handleChange = (inputType, e) => {
    setUser({...user, [inputType]: e.nativeEvent.text});
  };

  const handleSubmit = async () => {
    await signup().catch(console.error);
  };

  return (
    <View>
      {error && <Text>{error.message}</Text>}
      <TextInput
        style={styles.form}
        value={user.name}
        onChange={e => handleChange('name', e)}
        placeholder="name"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.form}
        value={user.email}
        onChange={e => handleChange('email', e)}
        placeholder="email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.form}
        value={user.password}
        onChange={e => handleChange('password', e)}
        placeholder="password"
        secureTextEntry={true}
      />
      <Button onPress={handleSubmit} title="Sign Up" />
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
