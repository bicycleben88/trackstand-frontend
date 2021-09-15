import {gql, useMutation} from '@apollo/client';
import React from 'react';
import {Button, Text} from 'react-native';
import {View, TextInput, StyleSheet} from 'react-native';
import useForm from '../lib/useForm';
import {CURRENT_USER_QUERY} from '../lib/user';
import {formStyles} from '../styles/globalStyles';

const {borderColor, height, margin, borderWidth, padding} = formStyles;

const styles = StyleSheet.create({
  form: {
    borderColor: borderColor,
    height: height,
    margin: margin,
    borderWidth: borderWidth,
    padding: padding,
  },
});

interface User {
  email: string;
  password: string;
}

const LOG_IN_MUTATION = gql`
  mutation LOG_IN_MUTATION($email: string!, $password: string!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function LogIn() {
  const {inputs, handleChange, resetForm} = useForm<User>({
    email: '',
    password: '',
  });

  const [login, {data, loading}] = useMutation(LOG_IN_MUTATION, {
    variables: inputs,
    refetchQueries: [{query: CURRENT_USER_QUERY}],
  });

  const handleSubmit = async () => {
    await login();
    resetForm();
  };

  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;

  return (
    <View>
      {error && <Text>{error.message}</Text>}
      {loading && <Text>Logging In...</Text>}
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
      <Button onPress={handleSubmit} title="Log In" />
    </View>
  );
}
