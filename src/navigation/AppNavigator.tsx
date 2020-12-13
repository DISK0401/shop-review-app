import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
/* screen */
import { HomeScreen } from '../screens/HomeScreen';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
};
