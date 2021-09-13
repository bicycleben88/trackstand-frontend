import React from 'react';
import {gql, useMutation} from '@apollo/client';
import BikeRideForm from './BikeRideForm';
import {GET_BIKE_RIDES} from './BikeRides';
import useForm from '../lib/useForm';

let today = new Date();

const CREATE_NEW_BIKE_RIDE = gql`
  mutation CREATE_NEW_BIKE_RIDE(
    $date: String!
    $miles: Int!
    $hours: Int!
    $minutes: Int!
  ) {
    createBikeRide(
      data: {date: $date, miles: $miles, hours: $hours, minutes: $minutes}
    ) {
      date
      miles
      hours
      minutes
    }
  }
`;

export default function CreateBikeRide() {
  const blankBikeRide = {
    date: today,
    miles: 0,
    hours: 0,
    minutes: 0,
  };

  const {inputs, handleChange, resetForm} = useForm({
    date: blankBikeRide.date,
    miles: blankBikeRide.miles,
    hours: blankBikeRide.hours,
    minutes: blankBikeRide.minutes,
  });

  const [createBikeRide, {data, loading, error}] = useMutation(
    CREATE_NEW_BIKE_RIDE,
    {
      variables: {
        date: inputs.date.toISOString(),
        miles: inputs.miles,
        hours: inputs.hours,
        minutes: inputs.minutes,
      },
      refetchQueries: [GET_BIKE_RIDES, 'GET_BIKE_RIDES'],
    },
  );

  return (
    <BikeRideForm
      bikeRide={blankBikeRide}
      handleSubmit={createBikeRide}
      handleChange={handleChange}
    />
  );
}
