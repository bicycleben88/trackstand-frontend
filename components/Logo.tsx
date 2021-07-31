import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import HeaderText from './HeaderText';

const {h3, textColor, baseFontSize, headerTextFont} = globalStyles;

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../public/images/logo.jpeg')}
        style={styles.logo}
      />
      <Text style={styles.logoText}>Track Stand</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  logo: {
    width: 50,
    height: 75,
  },
  logoText: {
    fontSize: baseFontSize,
    color: textColor,
    fontFamily: headerTextFont,
  },
});
