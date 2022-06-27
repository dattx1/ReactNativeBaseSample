/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { useAppDispatch, useAppSelector } from '@src/redux';
import { fetchUser, isLogined } from '@src/redux/user';
import React from 'react';
import { Button, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import UserInformation from '@src/screens/authentication/LoginScreen/function';

const LoginScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const isUserLogined = useAppSelector(isLogined);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {`This is Login Screen and User login status is ${isUserLogined}`}
      </Text>
      <Button
        title="Go to Details"
        onPress={() => {
          dispatch(fetchUser({ userId: 124 }));
          UserInformation.getStore();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default LoginScreen;
