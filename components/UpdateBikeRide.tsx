import React from 'react';
import {gql, useMutation} from '@apollo/client';
import {Button, TextInput, View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import useForm from '../lib/useForm';
import {GET_BIKE_RIDES} from './BikeRides';
import {formStyles} from '../styles/globalStyles';

const {
  borderColor,
  height,
  margin,
  borderWidth,
  padding,
  borderTopColor,
  borderRightColor,
  borderRadius,
  textAlign,
} = formStyles;

const styles = StyleSheet.create({
  form: {
    borderColor: borderColor,
    height: height,
    margin: margin,
    borderWidth: borderWidth,
    padding: padding,
    borderTopColor: borderTopColor,
    borderRightColor: borderRightColor,
    borderBottomLeftRadius: borderRadius,
    textAlign: textAlign,
  },
});

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
      variables: {
        id: item.id,
        date: inputs.date,
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
    <View>
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
      <Button onPress={() => handleSubmit()} title="Update Bike Ride" />
    </View>
  );
}
