import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {useUser} from '../lib/user';
import {globalStyles} from '../styles/globalStyles';
import BikeRides from './BikeRides';

const {paddingHorizontal, paddingVertical, h3, beige, green} = globalStyles;

export default function Dashboard({navigation}) {
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
      <Button
        onPress={() => navigation.navigate('Create Bike Ride')}
        title="Create New Bike Ride"
      />
      <BikeRides userId={loggedInUser.id} navigation={navigation} />
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    backgroundColor: beige,
    height: '100%',
  },
  header: {
    fontSize: h3,
    textAlign: 'center',
  },
});
