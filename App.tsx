/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Signup from './components/Signup';

import {Header} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Header />
        <View>
          <Signup />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
