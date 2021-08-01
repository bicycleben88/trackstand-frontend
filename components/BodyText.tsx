import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

const {textColor, baseFontSize, baseLineHeight, level1} = globalStyles;
export default function BodyText({children}) {
  return <Text style={styles.bodyText}>{children}</Text>;
}

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: 'Inter',
    color: textColor,
    fontSize: baseFontSize,
    lineHeight: baseLineHeight,
    shadowColor: 'black',
    shadowOffset: {height: 50, width: 50},
    shadowRadius: 50,
    shadowOpacity: 0.5,
  },
});
