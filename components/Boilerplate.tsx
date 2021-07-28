import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import BodyText from './BodyText';
import HeaderText from './HeaderText';
import Logo from './Logo';

const {h1, h2, h3, h4, h5} = globalStyles;

export default function Boilerplate() {
  return (
    <View>
      <Logo />
      <HeaderText>
        <Text style={{fontSize: h1}}>Header 1</Text>
        <Text style={{fontSize: h2}}>Header 2</Text>
        <Text style={{fontSize: h3}}>Header 3</Text>
        <Text style={{fontSize: h4}}>Header 4</Text>
        <Text style={{fontSize: h5}}>Header 5</Text>
      </HeaderText>
      <BodyText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil
        odit, ab eos obcaecati porro sed voluptatem eveniet autem est! Commodi
        illo quo iure blanditiis perferendis nihil et voluptate assumenda.
      </BodyText>
    </View>
  );
}
