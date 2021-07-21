/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Node} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import Signup from './components/Signup';
import Boilerplate from './components/Boilerplate';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          {/* <Signup /> */}
          <Boilerplate />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
