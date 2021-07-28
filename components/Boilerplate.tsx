import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import BodyText from './BodyText';

const {} = globalStyles;

export default function Boilerplate() {
  return (
    <View>
      <BodyText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil
        odit, ab eos obcaecati porro sed voluptatem eveniet autem est! Commodi
        illo quo iure blanditiis perferendis nihil et voluptate assumenda.
      </BodyText>
    </View>
  );
}
