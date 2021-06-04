import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'app/modulo/Home';
const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default MainNavigator;
