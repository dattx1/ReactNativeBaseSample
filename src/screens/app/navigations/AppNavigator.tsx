// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AUTHENTICATION_NAVIGATION_KEYS,
  LoginScreen,
} from '@src/screens/authentication';
import { HOME_NAVIGATION_KEYS, HomeScreen } from '@src/screens/home';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={AUTHENTICATION_NAVIGATION_KEYS.LOGIN}>
          <Stack.Screen
            name={AUTHENTICATION_NAVIGATION_KEYS.LOGIN}
            options={{
              title: 'LOGIN',
            }}
            component={LoginScreen}
          />
          <Stack.Screen
            name={HOME_NAVIGATION_KEYS.HOME}
            options={{
              title: 'HOME',
            }}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
