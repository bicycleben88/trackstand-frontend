import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
export default function BodyText({children}) {
  return <Text style={styles.bodyText}>{children}</Text>;
}

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: 'Inter',
    color: globalStyles.textColor,
  },
});
