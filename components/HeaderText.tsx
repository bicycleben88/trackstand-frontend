import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default function HeaderText({children}) {
  return <Text style={styles.headerText}>{children}</Text>;
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Playfair Display',
    margin: '3% 0 1.38%',
    fontWeight: '400',
    lineHeight: 50,
  },
});
