import React from 'react';
import {Text} from 'react-native';
import BikeRideForm from './BikeRideForm';

export default function UpdateBikeRide({route}) {
  const {item} = route.params;

  return <BikeRideForm bikeRide={item} />;
}
