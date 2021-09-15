import React from 'react';
import {gql, useMutation} from '@apollo/client';
import {StyleSheet} from 'react-native';
import {Text, Button, TextInput, View} from 'react-native';
import useForm from '../lib/useForm';
import {formStyles} from '../styles/globalStyles';

const {
  borderColor,
  height,
  margin,
  borderWidth,
  padding,
  borderTopColor,
  borderRightColor,
  borderRadius,
  textAlign,
} = formStyles;

const styles = StyleSheet.create({
  form: {
    borderColor: borderColor,
    height: height,
    margin: margin,
    borderWidth: borderWidth,
    padding: padding,
    borderTopColor: borderTopColor,
    borderRightColor: borderRightColor,
    borderBottomLeftRadius: borderRadius,
    textAlign: textAlign,
  },
});

interface User {
  name: string;
  email: string;
  password: string;
}

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
  const {inputs, handleChange, resetForm} = useForm<User>({
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
      {loading && <Text>Creating Your Account</Text>}
      {data && <Text>You're Account is Created, {data.createUser.name}!</Text>}
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
