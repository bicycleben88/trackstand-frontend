import React from 'react';
import {useQuery, gql} from '@apollo/client';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

const {h3, h5, headerColor} = globalStyles;

export const GET_BIKE_RIDES = gql`
  query GET_BIKE_RIDES($id: ID!) {
    allBikeRides(where: {user: {id: $id}}) {
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

export default function BikeRides(props: {userId: string}) {
  const {data, loading, error} = useQuery(GET_BIKE_RIDES, {
    variables: {
      id: props.userId,
    },
  });

  return (
    <View>
      {loading && <Text>Getting bike rides</Text>}
      {error && <Text>{error.message}</Text>}
      <FlatList
        data={data?.allBikeRides}
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
