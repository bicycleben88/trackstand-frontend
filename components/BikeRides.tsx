import {gql, useQuery} from '@apollo/client';
import React from 'react';
import {Text, View} from 'react-native';

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

  console.log(data);
  return (
    <View>
      {loading && <Text>Fetching Bike Rides...</Text>}
      {error && <Text>Failed to Fetch Bike Rides...</Text>}
      <Text>add info here</Text>
    </View>
  );
}
