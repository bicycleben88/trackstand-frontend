import React from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import BikeRideForm from './BikeRideForm';
import BikeRides from './BikeRides';

const {globalPaddingHorizontal, globalPaddingVertical} = globalStyles;

export default function Dashboard() {
  return (
    <View style={styled.container}>
      <BikeRideForm />
      <BikeRides />
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    paddingHorizontal: globalPaddingHorizontal,
    paddingVertical: globalPaddingVertical,
  },
});
