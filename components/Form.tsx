import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default function Form() {
  const [formData, setFormData] = React.useState('Dummy Data');
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Label:</Text>
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
    color: globalStyles.textColor,
    flex: 1,
  },
  label: {
    color: globalStyles.textColor,
  },
});
