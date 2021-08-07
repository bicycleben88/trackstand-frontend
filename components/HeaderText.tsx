import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

const {headerColor, headerTextFont} = globalStyles;

export default function HeaderText({children}) {
  return (
    <Text style={[styles.headerText, {color: headerColor}]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: headerTextFont,
    margin: '3% 0 1.38%',
    fontWeight: '400',
    color: headerColor,
  },
});
