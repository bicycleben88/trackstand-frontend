import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useUser} from '../lib/user';
import {globalStyles} from '../styles/globalStyles';
import BikeRideForm from './BikeRideForm';
import BikeRides from './BikeRides';

const {globalPaddingHorizontal, globalPaddingVertical, h3} = globalStyles;

export default function Dashboard() {
  const loggedInUser = useUser();

  if (!loggedInUser) {
    return (
      <View>
        <Text>Log in to access dashboard</Text>
      </View>
    );
  }

  return (
    <View style={styled.container}>
      <Text style={styled.header}>{loggedInUser.name}'s Bike Rides</Text>
      <BikeRideForm />
      <BikeRides userId={loggedInUser.id} />
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    paddingHorizontal: globalPaddingHorizontal,
    paddingVertical: globalPaddingVertical,
  },
  header: {
    fontSize: h3,
    textAlign: 'center',
  },
});
