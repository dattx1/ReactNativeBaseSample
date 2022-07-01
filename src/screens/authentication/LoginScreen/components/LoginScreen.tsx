import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ValidationInput } from '@src/components';
import { useAppDispatch, useAppSelector } from '@src/redux';
import { currentUserSelector, fetchUser } from '@src/redux/user';

import { LoginFormParameter } from '../type';
import { loginFormSchema } from '../validation';

export default function LoginScreen() {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(currentUserSelector);
  console.log(
    '🚀 ~ file: LoginScreen.tsx ~ line 16 ~ LoginScreen ~ currentUser',
    currentUser,
  );
  const { control } = useForm<LoginFormParameter>({
    mode: 'onChange',
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  const onSubmit = () => {
    dispatch(
      fetchUser({
        userId: '1',
      }),
    );
  };

  return (
    <View>
      <ValidationInput control={control} style={styles.input} name="userName" />
      <ValidationInput control={control} style={styles.input} name="password" />
      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
  },
});
