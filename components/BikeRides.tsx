import React from 'react';
import {useQuery, gql} from '@apollo/client';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

const {h3, h5, headerColor} = globalStyles;

export const GET_BIKE_RIDES = gql`
  query GET_BIKE_RIDES($id: ID!) {
    allBikeRides(where: {user: {id: $id}}) {
      id
      date
      miles
      hours
      minutes
    }
  }
`;

export default function BikeRides({userId, navigation}) {
  const {data, loading, error} = useQuery(GET_BIKE_RIDES, {
    variables: {
      id: userId,
    },
  });

  return (
    <View>
      {loading && <Text>Getting bike rides</Text>}
      {error && <Text>{error.message}</Text>}
      <FlatList
        data={data?.allBikeRides}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View key={item.id}>
            <Text style={styled.date}>{item.date}</Text>
            <Text>Miles: {item.miles}</Text>
            <Text>
              Duration: {item.hours}:{item.minutes}
            </Text>
            <Button
              onPress={() => navigation.navigate('Delete Bike Ride', {item})}
              title="Delete"
            />
            <Button
              onPress={() => navigation.navigate('Update Bike Ride', {item})}
              title="Update"
            />
          </View>
        )}
      />
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
