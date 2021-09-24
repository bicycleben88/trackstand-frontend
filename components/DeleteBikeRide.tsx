import {useMutation, gql} from '@apollo/client';
import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {GET_BIKE_RIDES} from './BikeRides';
import {globalStyles} from '../styles/globalStyles';

const {beige, h4, green, white} = globalStyles;

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
    <View style={styles.container}>
      {loading && <Text>Deleting bike ride</Text>}
      {error && <Text>{error.message} </Text>}
      <Text style={styles.header}>
        Are you sure you want to delete this bike ride from {item.date}?
      </Text>
      <View style={styles.button}>
        <Button
          onPress={() => {
            deleteBikeRide();
            navigation.navigate('Dashboard');
          }}
          title="Yes"
        />
        <Button onPress={() => navigation.navigate('Dashboard')} title="No" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: beige,
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    fontSize: h4,
    backgroundColor: green,
    color: white,
    textAlign: 'center',
  },
});
