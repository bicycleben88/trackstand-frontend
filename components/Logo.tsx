import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import HeaderText from './HeaderText';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../public/images/logo.jpeg')}
        style={styles.logo}
      />
      <HeaderText>
        <Text style={{fontSize: globalStyles.h3}}>Track Stand</Text>
      </HeaderText>
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
});
