import React from 'react';
import {StyleSheet, View} from 'react-native';
import AxiosCall from './components/AxiosCall';
import APICall from './components/APICall';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <AxiosCall /> */}
      <APICall />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
