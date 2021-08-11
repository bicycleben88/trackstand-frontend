import {gql, useMutation} from '@apollo/client';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button, TextInput, View} from 'react-native';

const CREATE_NEW_USER = gql`
  mutation CREATE_NEW_USER(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(data: {name: $name, email: $email, password: $password}) {
      name
      id
      email
    }
  }
`;

export default function SignUp() {
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const [signup, {data, loading, error}] = useMutation(CREATE_NEW_USER, {
    variables: user,
    errorPolicy: 'none',
  });

  const handleChange = (inputType, e) => {
    setUser({...user, [inputType]: e.nativeEvent.text});
  };

  const handleSubmit = async () => {
    await signup().catch(console.error);
  };

  if (data) {
    console.log(data);
  }

  if (loading) {
    console.log('loading');
  }

  if (error) {
    console.log({error, data, loading});
    // console.log(Object.keys(error));
    console.log(error.graphQLErrors);
    // console.log(error.clientErrors);
    // console.log(error.networkError);
    // console.log(error.message);
    // console.log(error.extraInfo);
  }

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
