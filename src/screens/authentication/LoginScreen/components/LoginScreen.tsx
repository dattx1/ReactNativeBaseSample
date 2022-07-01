import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ValidationInput } from '@src/components';

import { LoginFormParameter } from '../type';
import { loginFormSchema } from '../validation';

export default function LoginScreen() {
  const { control, getValues } = useForm<LoginFormParameter>({
    mode: 'onChange',
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      userName: '',
      password: '',
    },
  });
  const onSubmit = () => {
    const { userName, password } = getValues();
    console.log(
      '🚀 ~ file: LoginScreen.tsx ~ line 23 ~ onSubmit ~ { userName, password }',
      { userName, password },
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
