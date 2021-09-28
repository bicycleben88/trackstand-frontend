import React from 'react';
import {gql, useMutation} from '@apollo/client';
import {Button, TextInput, View, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import useForm from '../lib/useForm';
import {GET_BIKE_RIDES} from './BikeRides';
import {
  formStyles,
  containerStyles,
  globalStyles,
} from '../styles/globalStyles';
import {formatNumber} from '../lib/formatNumber';

const {white, black} = globalStyles;
const placeholderTextColor = `${black}`;

interface BikeRide {
  date: Date;
  miles: number;
  hours: number;
  minutes: number;
}

const UPDATE_BIKE_RIDE = gql`
  mutation UPDATE_BIKE_RIDE(
    $id: ID!
    $date: String!
    $miles: Int!
    $hours: Int!
    $minutes: Int!
  ) {
    updateBikeRide(
      id: $id
      data: {date: $date, miles: $miles, hours: $hours, minutes: $minutes}
    ) {
      date
      miles
      hours
      minutes
    }
  }
`;

export default function UpdateBikeRide({route, navigation}) {
  const {item} = route.params;
  const longDate = item.date.slice(4); // format date string
  const {inputs, handleChange, resetForm} = useForm({
    date: new Date(longDate),
    miles: item.miles,
    hours: item.hours,
    minutes: item.minutes,
  });

  const [show, setShow] = React.useState(false); // display date picker

  const [updateBikeRide, {data, loading, error}] = useMutation(
    UPDATE_BIKE_RIDE,
    {
      variables: {
        id: item.id,
        date: inputs.date.toDateString(),
        miles: inputs.miles,
        hours: inputs.hours,
        minutes: inputs.minutes,
      },
      refetchQueries: [GET_BIKE_RIDES, 'GET_BIKE_RIDES'],
    },
  );

  const handleSubmit = () => {
    updateBikeRide();
    resetForm();
    if (!error) {
      navigation.navigate('Dashboard');
    }
  };

  return (
    <View style={containerStyles}>
      {loading && <Text>Updating bike ride</Text>}
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
        value={inputs.hours > 0 ? `${formatNumber(inputs.hours)}` : ''}
        keyboardType="number-pad"
        onChange={e => handleChange('hours', e)}
        placeholder="hours"
        autoCapitalize="none"
      />
      <TextInput
        style={formStyles}
        placeholderTextColor={placeholderTextColor}
        value={inputs.minutes > 0 ? `${formatNumber(inputs.minutes)}` : ''}
        keyboardType="number-pad"
        onChange={e => handleChange('minutes', e)}
        placeholder="minutes"
        autoCapitalize="none"
      />
      <Button
        color={black}
        onPress={() => handleSubmit()}
        title="Update Bike Ride"
      />
    </View>
  );
}
