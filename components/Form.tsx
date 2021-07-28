import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

export default function Form() {
  const [formData, setFormData] = React.useState('Dummy Data');
  return (
    <View style={styles.container}>
      <Text>Label:</Text>
      <TextInput
        value={formData}
        onChangeText={text => setFormData(text)}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
});