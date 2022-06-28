// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import {
  AUTHENTICATION_NAVIGATION_KEYS,
  LoginScreen,
} from '@src/screens/authentication';
import { HOME_NAVIGATION_KEYS, HomeScreen } from '@src/screens/home';

const Stack = createNativeStackNavigator();

function App() {
  const { t } = useTranslation('navigations');
  return (
    <Stack.Navigator initialRouteName={AUTHENTICATION_NAVIGATION_KEYS.LOGIN}>
      <Stack.Screen
        name={AUTHENTICATION_NAVIGATION_KEYS.LOGIN}
        options={{
          title: `${t('title.login')}`,
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name={HOME_NAVIGATION_KEYS.HOME}
        options={{
          title: `${t('title.home')}`,
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

export default App;
