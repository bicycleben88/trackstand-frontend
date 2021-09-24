import React from 'react';
import {gql, useMutation} from '@apollo/client';
import {Button, TextInput, View, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {GET_BIKE_RIDES} from './BikeRides';
import useForm from '../lib/useForm';
import {
  formStyles,
  containerStyles,
  globalStyles,
} from '../styles/globalStyles';

const {white, black} = globalStyles;
const placeholderTextColor = `${black}`;

interface BikeRide {
  date: Date;
  miles: number;
  hours: number;
  minutes: number;
}

let today = new Date();

const CREATE_NEW_BIKE_RIDE = gql`
  mutation CREATE_NEW_BIKE_RIDE(
    $date: String!
    $miles: Int!
    $hours: Int!
    $minutes: Int!
  ) {
    createBikeRide(
      data: {date: $date, miles: $miles, hours: $hours, minutes: $minutes}
    ) {
      date
      miles
      hours
      minutes
    }
  }
`;

export default function CreateBikeRide({navigation}) {
  const {inputs, handleChange, resetForm} = useForm({
    date: today,
    miles: 0,
    hours: 0,
    minutes: 0,
  });

  const [show, setShow] = React.useState(false); // display date picker

  const [createBikeRide, {data, loading, error}] = useMutation(
    CREATE_NEW_BIKE_RIDE,
    {
      variables: {
        date: inputs.date.toISOString(),
        miles: inputs.miles,
        hours: inputs.hours,
        minutes: inputs.minutes,
      },
      refetchQueries: [GET_BIKE_RIDES, 'GET_BIKE_RIDES'],
    },
  );

  const handleSubmit = () => {
    createBikeRide();
    resetForm();
    if (!error) {
      navigation.navigate('Dashboard');
    }
  };

  return (
    <View style={containerStyles}>
      {loading && <Text>Creating new bike ride</Text>}
      {error && <Text>{error.message}</Text>}
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
        style={formStyles}
        placeholderTextColor={placeholderTextColor}
        value={inputs.miles > 0 ? `${inputs.miles}` : ''}
        keyboardType="number-pad"
        onChange={e => handleChange('miles', e)}
        placeholder="miles"
        autoCapitalize="none"
      />
      <TextInput
        style={formStyles}
        placeholderTextColor={placeholderTextColor}
        value={inputs.hours > 0 ? `${inputs.hours}` : ''}
        keyboardType="number-pad"
        onChange={e => handleChange('hours', e)}
        placeholder="hours"
        autoCapitalize="none"
      />
      <TextInput
        style={formStyles}
        placeholderTextColor={placeholderTextColor}
        value={inputs.minutes > 0 ? `${inputs.minutes}` : ''}
        keyboardType="number-pad"
        onChange={e => handleChange('minutes', e)}
        placeholder="minutes"
        autoCapitalize="none"
      />
      <Button
        color={`${black}`}
        onPress={() => handleSubmit()}
        title="Add Bike Ride"
      />
    </View>
  );
}
