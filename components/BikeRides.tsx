import {gql, useQuery} from '@apollo/client';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useUser} from '../lib/user';
import {globalStyles} from '../styles/globalStyles';

const {globalPaddingHorizontal, globalPaddingVertical, h3, h5} = globalStyles;

const USER_BIKERIDES = gql`
  query USER_BIKERIDES {
    allBikeRides(where: {user: {id: "ckqxy1tbb0012fx01zu0m3z41"}}) {
      date
      miles
      hours
      minutes
      user {
        name
      }
    }
  }
`;

export default function BikeRides() {
  const {data, loading, error} = useQuery(USER_BIKERIDES);
  const loggedInUser = useUser();

  if (!loggedInUser) {
    return <Text>Please Log in to view Bike Rides</Text>;
  }

  const {allBikeRides} = data;

  return (
    <View style={styled.container}>
      {loading && <Text>Fetching Bike Rides...</Text>}
      {error && <Text>Failed to Fetch Bike Rides...</Text>}
      <Text style={styled.header}>
        {allBikeRides[0].user.name}'s Bike Rides
      </Text>
      <View>
        <FlatList
          data={allBikeRides}
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
    fontSize: h5,
  },
});
