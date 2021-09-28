import React from 'react';
import {useQuery, gql} from '@apollo/client';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {formatNumber} from '../lib/formatNumber';

const {h3, h4, green, white, clear, gumwall, black} = globalStyles;

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
          <View style={styles.container}>
            <View key={item.id} style={styles.bikeRide}>
              <Text style={styles.date}>{item.date}</Text>
              <Text>Miles: {item.miles}</Text>
              <Text>
                Duration: {formatNumber(item.hours)}:
                {formatNumber(item.minutes)}
              </Text>
              <View style={styles.buttons}>
                <Button
                  onPress={() =>
                    navigation.navigate('Delete Bike Ride', {item})
                  }
                  title="Delete"
                />
                <Button
                  onPress={() =>
                    navigation.navigate('Update Bike Ride', {item})
                  }
                  title="Update"
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: black,
    borderWidth: 5,
    borderRadius: 4,
    marginBottom: 3,
  },
  header: {
    fontSize: h3,
    textAlign: 'center',
  },
  bikeRide: {
    borderColor: gumwall,
    borderWidth: 2,
  },
  date: {
    backgroundColor: green,
    fontSize: h4,
    padding: 2,
    textAlign: 'center',
    color: white,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
