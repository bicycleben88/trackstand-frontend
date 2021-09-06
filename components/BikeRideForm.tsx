import React from 'react';
import {TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';
import useForm from '../lib/useForm';

export default function BikeRideForm() {
  const {inputs, handleChange, resetForm} = useForm({
    date: '',
    miles: '',
    hours: '',
    minutes: '',
  });

  console.log(inputs);
  return (
    <View>
      <TextInput
        style={styles.form}
        value={inputs.date}
        onChange={e => handleChange('date', e)}
        placeholder="date"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.form}
        value={inputs.miles}
        onChange={e => handleChange('miles', e)}
        placeholder="miles"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.form}
        value={inputs.hours}
        onChange={e => handleChange('hours', e)}
        placeholder="hours"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.form}
        value={inputs.minutes}
        onChange={e => handleChange('minutes', e)}
        placeholder="minutes"
        autoCapitalize="none"
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
