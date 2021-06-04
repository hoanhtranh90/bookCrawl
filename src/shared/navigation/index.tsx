import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './main.navigator';
import { navigationRef } from '../../config/root-navigation';

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
        <MainNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
