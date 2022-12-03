
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation/index';

export default App = () => {
  
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
);
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});