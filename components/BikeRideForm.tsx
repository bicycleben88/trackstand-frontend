import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface BikeRide {
  date: Date;
  miles: number;
  hours: number;
  minutes: number;
}

export default function BikeRideForm({bikeRide, handleSubmit, handleChange}) {
  const [show, setShow] = React.useState(false); // display date picker

  return (
    <View>
      <View>
        <Button onPress={() => setShow(!show)} title="Date" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={bikeRide.date}
          display="default"
          onChange={(e: object) => handleChange('date', e)}
        />
      )}
      <TextInput
        style={styles.form}
        value={bikeRide.miles > 0 ? `${bikeRide.miles}` : ''}
        keyboardType="number-pad"
        onChange={e => handleChange('miles', e)}
        placeholder="miles"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.form}
        value={bikeRide.hours > 0 ? `${bikeRide.hours}` : ''}
        keyboardType="number-pad"
        onChange={e => handleChange('hours', e)}
        placeholder="hours"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.form}
        value={bikeRide.minutes > 0 ? `${bikeRide.minutes}` : ''}
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
