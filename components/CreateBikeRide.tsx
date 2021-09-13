import React from 'react';
import BikeRideForm from './BikeRideForm';

let today = new Date();

export default function CreateBikeRide() {
  const blankBikeRide = {
    date: today,
    miles: 0,
    hours: 0,
    miuntes: 0,
  };
  return <BikeRideForm bikeRide={blankBikeRide} />;
}
