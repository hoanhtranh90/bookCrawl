import React from 'react';
import store from './shared/store';
import { Provider } from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppNavigator from './shared/navigation';

const App = () => {
  return (
    <>
      <Provider store={store}>
            <AppNavigator />
      </Provider>
    </>
  );
};


export default App;
