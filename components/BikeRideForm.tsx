import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';
import useForm from '../lib/useForm';

interface BikeRide {
  date: string;
  miles: number;
  hours: number;
  minutes: number;
}

export default function BikeRideForm() {
  const {inputs, handleChange, resetForm} = useForm<BikeRide>({
    date: '',
    miles: 0,
    hours: 0,
    minutes: 0,
  });

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
        value={`${inputs.miles}`}
        keyboardType="number-pad"
        onChange={e => handleChange('miles', e)}
        placeholder="miles"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.form}
        value={`${inputs.hours}`}
        keyboardType="number-pad"
        onChange={e => handleChange('hours', e)}
        placeholder="hours"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.form}
        value={`${inputs.minutes}`}
        keyboardType="number-pad"
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
