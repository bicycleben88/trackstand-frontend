import React from 'react';
import {gql, useMutation} from '@apollo/client';
import BikeRideForm from './BikeRideForm';
import useForm from '../lib/useForm';

const UPDATE_BIKE_RIDE = gql`
  mutation UPDATE_BIKE_RIDE(
    $date: String!
    $miles: Int!
    $hours: Int!
    $minutes: Int!
  ) {
    updateBikeRide(
      data: {date: $date, miles: $miles, hours: $hours, minutes: $minutes}
    ) {
      date
      miles
      hours
      minutes
    }
  }
`;

export default function UpdateBikeRide({route}) {
  const {item} = route.params;

  const {inputs, handleChange, resetForm} = useForm({
    date: item.date,
    miles: item.miles,
    hours: item.hours,
    minutes: item.minutes,
  });

  const [updateBikeRide, {data, loading, error}] = useMutation(
    UPDATE_BIKE_RIDE,
    {
      variables: inputs,
    },
  );

  return (
    <BikeRideForm
      bikeRide={item}
      handleSubmit={updateBikeRide}
      handleChange={handleChange}
    />
  );
}
