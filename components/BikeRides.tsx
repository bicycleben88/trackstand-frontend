import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useUser} from '../lib/user';
import {globalStyles} from '../styles/globalStyles';

const {globalPaddingHorizontal, globalPaddingVertical, h3, h5, headerColor} =
  globalStyles;

export default function BikeRides() {
  const loggedInUser = useUser();

  if (!loggedInUser) {
    return <Text>Please Log in to view Bike Rides</Text>;
  }

  const {bikeRide} = loggedInUser;

  return (
    <View style={styled.container}>
      <Text style={styled.header}>{loggedInUser.name}'s Bike Rides</Text>
      <View>
        <FlatList
          data={bikeRide}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <>
              <Text style={styled.date}>{item.date}</Text>
              <Text>Miles: {item.miles}</Text>
              <Text>
                Duration: {item.hours}:{item.minutes}
              </Text>
            </>
          )}
        />
      </View>
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
  date: {
    backgroundColor: headerColor,
    fontSize: h5,
  },
});
