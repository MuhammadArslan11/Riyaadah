import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { primaryColor, secondaryColor, textColor } from './screens/colors';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColor,
  },
});

export default App;
