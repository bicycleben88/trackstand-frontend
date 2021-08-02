/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Slider, {SliderComponent} from '@react-native-community/slider';
import BodyText from './BodyText';
import {TextInput} from 'react-native';

export default function BoxShadowSlider() {
  const [shadowOffsetWidth, setShadowOffsetWidth] = React.useState(0);
  const [shadowOffsetHeight, setShadowOffsetHeight] = React.useState(0);
  const [shadowRadius, setShadowRadius] = React.useState(0);
  const [shadowOpacity, setShadowOpacity] = React.useState(0.1);

  return (
    <>
      <BodyText
        style={{
          shadowColor: 'black',
          shadowOffset: {
            width: shadowOffsetWidth,
            height: -shadowOffsetHeight,
          },
          shadowOpacity,
          shadowRadius,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis vel
        nostrum provident rem possimus nihil quos aliquid distinctio nam
        deserunt aut dicta veritatis odit, fugit architecto alias ullam, fuga
        voluptate!
      </BodyText>
      <TextInput keyboardType="decimal-pad" />
    </>
  );
}
