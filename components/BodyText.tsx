import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function BodyText({children}) {
  return <Text style={styles.bodyText}>{children}</Text>;
}

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: 'Inter',
  },
});
