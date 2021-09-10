import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useUser} from '../lib/user';
import {globalStyles} from '../styles/globalStyles';

const {h3, h5, headerColor} = globalStyles;

export default function BikeRides() {
  return (
    <View>
      <Text>Add Bike Rides Here</Text>
      {/* <FlatList
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
      /> */}
    </View>
  );
}

const styled = StyleSheet.create({
  header: {
    fontSize: h3,
    textAlign: 'center',
  },
  date: {
    backgroundColor: headerColor,
    fontSize: h5,
  },
});
