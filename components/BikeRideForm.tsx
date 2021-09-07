import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import useForm from '../lib/useForm';

interface BikeRide {
  date: Date;
  miles: number;
  hours: number;
  minutes: number;
}

let today = new Date();

export default function BikeRideForm() {
  const {inputs, handleChange, resetForm} = useForm<BikeRide>({
    date: today,
    miles: 0,
    hours: 0,
    minutes: 0,
  });

  const [show, setShow] = React.useState(false); // display date picker

  return (
    <View>
      <View>
        <Button onPress={() => setShow(!show)} title="Date" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={inputs.date}
          display="default"
          onChange={(e: object) => handleChange('date', e)}
        />
      )}
      <TextInput
        style={styles.form}
        value={inputs.miles > 0 ? `${inputs.miles}` : ''}
        keyboardType="number-pad"
        onChange={e => handleChange('miles', e)}
        placeholder="miles"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.form}
        value={inputs.hours > 0 ? `${inputs.hours}` : ''}
        keyboardType="number-pad"
        onChange={e => handleChange('hours', e)}
        placeholder="hours"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.form}
        value={inputs.minutes > 0 ? `${inputs.minutes}` : ''}
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
