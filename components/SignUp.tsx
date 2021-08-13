import {gql, useMutation} from '@apollo/client';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button, TextInput, View} from 'react-native';
import useForm from '../lib/useForm';

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
  const {inputs, handleChange, resetForm} = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [signup, {data, loading, error}] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  });

  const handleSubmit = async () => {
    await signup().catch(console.error);
    resetForm();
  };

  return (
    <View>
      {error && <Text>{error.message}</Text>}
      <TextInput
        style={styles.form}
        value={inputs.name}
        onChange={e => handleChange('name', e)}
        placeholder="name"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.form}
        value={inputs.email}
        onChange={e => handleChange('email', e)}
        placeholder="email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.form}
        value={inputs.password}
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
