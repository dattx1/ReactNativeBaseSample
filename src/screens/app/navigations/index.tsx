// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { store } from '@src/redux/store';
import AppNavigator from './AppNavigator';
import '@src/redux/middleware';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AppNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
