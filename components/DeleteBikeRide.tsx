import {useMutation, gql} from '@apollo/client';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {GET_BIKE_RIDES} from './BikeRides';

const DELETE_BIKE_RIDE = gql`
  mutation DELETE_BIKE_RIDE($id: ID!) {
    deleteBikeRide(id: $id) {
      id
    }
  }
`;

export default function DeleteBikeRide({route, navigation}) {
  const {item} = route.params;
  const [deleteBikeRide, {loading, error}] = useMutation(DELETE_BIKE_RIDE, {
    variables: {
      id: item.id,
    },
    refetchQueries: [GET_BIKE_RIDES, 'GET_BIKE_RIDES'],
  });

  return (
    <View>
      {loading && <Text>Deleting bike ride</Text>}
      {error && <Text>{error.message} </Text>}
      <Text>
        Are you sure you want to delete this bike ride from {item.date}?
      </Text>
      <Button
        onPress={() => {
          deleteBikeRide();
          navigation.navigate('Dashboard');
        }}
        title="Yes"
      />
      <Button onPress={() => navigation.navigate('Dashboard')} title="No" />
    </View>
  );
}
