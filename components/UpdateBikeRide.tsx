import React from 'react';
import {gql, useMutation} from '@apollo/client';
import {Button, TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import BikeRideForm from './BikeRideForm';
import useForm from '../lib/useForm';

interface BikeRide {
  date: Date;
  miles: number;
  hours: number;
  minutes: number;
}

const UPDATE_BIKE_RIDE = gql`
  mutation UPDATE_BIKE_RIDE(
    $date: String!
    $miles: Int!
    $hours: Int!
    $minutes: Int!
  ) {
    updateBikeRide(
      data: {date: $date, miles: $miles, hours: $hours, minutes: $minutes}
    ) {
      date
      miles
      hours
      minutes
    }
  }
`;

export default function UpdateBikeRide({route}) {
  const {item} = route.params;

  const {inputs, handleChange, resetForm} = useForm({
    date: item.date,
    miles: item.miles,
    hours: item.hours,
    minutes: item.minutes,
  });

  const [show, setShow] = React.useState(false); // display date picker

  const [updateBikeRide, {data, loading, error}] = useMutation(
    UPDATE_BIKE_RIDE,
    {
      variables: inputs,
    },
  );

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
      <Button onPress={() => handleSubmit()} title="Add Bike Ride" />
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
