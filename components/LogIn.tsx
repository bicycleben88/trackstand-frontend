import {gql} from '@apollo/client';
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import useForm from '../lib/useForm';

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
  const {inputs, handleChange, resetForm} = useForm({
    email: '',
    password: '',
  });

  return (
    <View>
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
